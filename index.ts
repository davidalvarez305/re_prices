import zipcodes from "zipcodes";
import { Builder, By } from "selenium-webdriver";
import firefox from "selenium-webdriver/firefox";

const zip_codes = zipcodes.lookupByName("Miami", "FL");

async function main() {
  // Create a new WebDriver instance (make sure you have the appropriate driver executable installed)
  // Set Firefox options
  const options = new firefox.Options();
  // options.headless();

  // Create a new WebDriver instance
  const driver = await new Builder()
    .setFirefoxOptions(options)
    .forBrowser("firefox")
    .build();

  try {
    // Navigate to the page
    await driver.get("https://www.zillow.com/hialeah-fl-33012/");

    let prev = 0;
    for (let i = 500; i < 2000; i += 500) {
      // Scroll to the bottom of the page
      await driver.executeScript(
        `document.getElementById('search-page-list-container').scrollBy(${prev}, ${i})`
      );
      // Wait for a brief moment (optional)
      await driver.sleep(2000);

      prev = i;

      console.log(i);
    }

    const properties: Listing[] = [];

    // Find elements with the specified class
    const grid = await driver.findElement(By.id("grid-search-results"));

    // Process and log the elements
    if (!grid) return;

    const listings = await grid.findElements(By.css("li"));

    for (const element of listings) {
      const listing = <Listing>{};

      try {
        const el = await element.findElement(
          By.css('[data-test="property-card-price"]')
        );
        const listing_price = await el.getText();

        if (listing_price === "") return;

        const card = await element.findElement(
          By.css(".StyledPropertyCardDataWrapper-c11n-8-84-0__sc-1omp4c3-0")
        );

        let typeOfProperty = "";
        const forSale = await element
          .findElement(
            By.css(".StyledPropertyCardDataArea-c11n-8-84-0__sc-yipmu-0.exsYeB")
          )
          .getText();

        typeOfProperty = forSale.split("-")[1].split(" for ")[0].trim();

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

        const cardAddress = await element
          .findElement(By.css('[data-test="property-card-addr"]'))
          .getText();

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

        let price_cut = 0;

        try {
          const data = await element.findElement(
            By.className("StyledPropertyCardBadge-c11n-8-84-0__sc-6gojrl-0")
          );
          const val = await data.getText();

          if (val.includes("Price cut:")) {
            const cut = Number(
              val.split("Price cut:")[1].split(" ")[1].match(/\d+/g)?.join("")
            );
            price_cut = cut;
          }
        } catch (err) {
          console.error(err);
        }

        listing.property_type = {
          type: typeOfProperty,
        };

        listing.price_cut = price_cut;
        properties.push(listing);
      } catch (err) {}
    }

    console.log(properties.length);
  } catch (err) {
    console.error(err);
  }
}

main();
