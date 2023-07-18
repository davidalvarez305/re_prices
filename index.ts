import zipcodes from "zipcodes";
import { Builder, By, WebDriver, WebElement } from "selenium-webdriver";
import firefox from "selenium-webdriver/firefox";
import "dotenv/config";

async function handlePressAndHold(driver: WebDriver) {
  console.log('Handling click and hold...');
  try {
    let element: WebElement | null = null;

    // Wait for the element to be present
    const elements = await driver.findElements(By.css('div'));
    console.log(`${elements.length} elements found.`);

    for (const currentElement of elements) {
      const divRole = await currentElement.getAttribute('role');

      if (!divRole) continue;

      if (divRole.includes('button')) {
        element = currentElement
        break;
      };
    }

    if (!element) throw new Error('Could not find press button.');

    // Perform a click and hold action
    await driver.actions().move({ origin: element }).press().perform();

    // Wait for 10 seconds
    await driver.sleep(10000);

    // Release the click
    await driver.actions().release().perform();
  } catch (err) {
    console.error('FAILED TO CLICK AND HOLD: ', err);
  }
}

async function getPriceCut(element: WebElement): Promise<number> {
  let cut = 0;
  try {
    const data = await element.findElement(By.css("span.StyledPropertyCardBadge-c11n-8-89-0__sc-6gojrl-0"));
    const val = await data.getText();

    if (val.includes("Price cut:")) cut = Number(val.split("Price cut:")[1].split(" ")[1].match(/\d+/g)?.join(""));

  } catch (err) {
    console.log('Error getting price cut: ', cut);
  } finally {
    return cut;
  }
}

async function scrollTop(driver: WebDriver) {
  await driver.executeScript(`document.getElementById('search-page-list-container').scrollTo(0, 0)`)
}

async function scrollPage(driver: WebDriver) {
  let prev = 0;
  for (let i = 500; i < 3000; i += 500) {
    try {
      // Scroll to the bottom of the page
      await driver.executeScript(`document.getElementById('search-page-list-container').scrollBy(${prev}, ${i})`);

      // Wait for a brief moment (optional)
      await driver.sleep(1000);

      prev = i;

    } catch (err) {
      // Do something here
    }
  }
}

async function getListingDetails(element: WebElement): Promise<Listing> {
  const listing = <Listing>{};

  try {
    const listing_price = await element.findElement(By.css('[data-test="property-card-price"]')).getText();

    if (listing_price === "") throw new Error('Could not find price.');

    const card = await element.findElement(By.css('[data-test="property-card"]'));

    const forSale = await element.findElement(By.css('div.StyledPropertyCardDataArea-c11n-8-89-0__sc-yipmu-0.eLdkcJ')).getText();

    let typeOfProperty = forSale.split("-")[1].split(" for ")[0].trim();

    const details = await card.findElements(By.css("li"));

    for (let i = 0; i < details.length; i++) {
      const val = await details[i].getText();
      switch (i) {
        case 0:
          listing.beds = Number(val.split(" bds")[0]);
          break;
        case 1:
          listing.bathrooms = Number(val.split(" ba")[0]);
          break;
        case 2:
          listing.sqft = Number(val.split(" sqft")[0].split(",").join(""));
          break;
      }
    }

    listing.price = Number(listing_price.match(/\d+/g)?.join(""));

    const cardAddress = await element.findElement(By.css('[data-test="property-card-addr"]')).getText();

    const addr = cardAddress.trim().split(",");

    const [__, state, zip_code] = addr[2].split(" ");

    const address = <Address>{
      address_line_one: addr[0],
      zip_code: {
        zip_code: zip_code,
        city: {
          name: addr[1],
          state: {
            name: state,
          },
        },
      },
    };

    listing.address = address;

    let price_cut = await getPriceCut(element);

    listing.property_type = {
      type: typeOfProperty,
    };

    listing.price_cut = price_cut;
    return listing;
  } catch (err) {
    throw new Error(err as any);
  }
}

async function getPrices(driver: WebDriver, url: string): Promise<Listing[]> {
  const properties: Listing[] = [];
  try {
    await driver.get(url);

    await scrollPage(driver);

    // await scrollTop(driver);

    // Find elements with the specified class
    const grid = await driver.findElement(By.id("grid-search-results"));

    // Process and log the elements
    if (!grid) return [];

    const listings = await grid.findElements(By.css("li"));
    console.log(`${listings.length} listings found.`);

    for (const element of listings) {
      try {
        const listing = await getListingDetails(element);
        console.log(listing);
        properties.push(listing);
      } catch (err) {
        // Do something here
      }
    }

    const pagination = await driver.findElement(By.css('a[title="Next page"]'));

    await pagination.click();

    // Wait for a brief moment (optional)
    await driver.sleep(3000);
    return properties;
  } catch (err) {
    handlePressAndHold(driver);
  } finally {
    return properties;
  }
}

async function main() {
  // Create a Firefox profile
  const options = new firefox.Options()

  // Set the desired user agent
  // options.setPreference('general.useragent.override', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36');

  // Set the desired IP address using a proxy server
  options.setPreference('network.proxy.type', 1);
  options.setPreference('network.proxy.http', process.env.PROXY_HOST || "");
  options.setPreference('network.proxy.http_port', process.env.PROXY_PORT || "");
  // options.headless();

  // Create a new WebDriver instance
  const driver = await new Builder()
    .setFirefoxOptions(options)
    .forBrowser("firefox")
    .build();

  const zip_codes = zipcodes.lookupByName("Miami", "FL");
  let prices: Listing[] = [];
  for (let i = 0; i < 4; i++) {
    try {
      const url = `https://www.zillow.com/homes/${zip_codes[i].zip}_rb/`;

      const listings = await getPrices(driver, url);
      prices = [...prices, ...listings];
    } catch (err) {
      // Do something here
    }
  }

  console.log(`AMOUNT OF LISTINGS CRAWLED: ${prices.length}`)

  // await driver.close();
}

main();
