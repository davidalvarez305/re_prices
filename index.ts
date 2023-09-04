import zipcodes from "zipcodes";
import userAgents from "user-agents";
import "dotenv/config";
import axios from "axios";
import cheerio from "cheerio";
import { NextDataObject } from "./types";
import { Entry } from "./entities";
import { createEntryFactory, createPropertyFactory, saveEntries } from "./utils";
import { DBContext } from "./db";
import { __prod__ } from "./constants";

async function main() {
  try {
    DBContext.initialize();
    const userAgent = new userAgents();

    // Generate a random user agent
    const randomUserAgent = userAgent.random();
    const axiosConfig = {
      headers: {
        "User-Agent": randomUserAgent.toString(),
        "Content-Type": "text/html",
      },
      proxy: {
        protocol: "http",
        host: String(process.env.PROXY_HOST),
        port: Number(process.env.PROXY_PORT),
        auth: {
          username: String(process.env.PROXY_USERNAME),
          password: String(process.env.PROXY_PASSWORD),
        },
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

    const entries: Partial<Entry>[] = [];

    const nextDataObject: NextDataObject = JSON.parse(nextDataScript);
    const listings =
      nextDataObject.props.pageProps.searchPageState.cat1.searchResults
        .listResults;

    for (let i = 0; i < listings.length; i++) {
      const listing = listings[i];

      try {
        const property = await createPropertyFactory(listing);
        const entry = await createEntryFactory(listing, property);

        entries.push(entry);
      } catch (err) {
        console.error(`Failed to create entry: `, err);
      }
    }

    await saveEntries(entries);
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
