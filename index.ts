import zipcodes from "zipcodes";
import "dotenv/config";
import axios from "axios";
import cheerio from "cheerio";
import { NextDataObject } from "types";

async function main() {
  try {
    const axiosConfig = {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/117.0",
        "Content-Type": "text/html",
      },
    };
    const response = await axios.get(
      `https://www.zillow.com/homes/33012_rb/`,
      axiosConfig
    );

    if (response.status !== 200)
      console.log("Request failed.", response.status);

    const html = response.data;
    const $ = cheerio.load(html);

    // Find the element with the id "__NEXT_DATA__"
    const nextDataScript = $("#__NEXT_DATA__").html();

    if (!nextDataScript) throw new Error("__NEXT_DATA__ not found.");

    const nextDataObject: NextDataObject = JSON.parse(nextDataScript);
    const listings = nextDataObject.props.pageProps.searchPageState.cat1.searchResults.listResults;
    console.log(listings);
  } catch (err) {
    console.error(err);
  }

  /* const zip_codes = zipcodes.lookupByName("Miami", "FL");
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

  // await driver.close(); */
}

main();
