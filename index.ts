import axios from "axios";
import zipcodes from "zipcodes";
import cheerio from "cheerio";

const REQUEST_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/112.0",
  Accept: "*/*",
  "Accept-Language": "en-US,en;q=0.5",
  "Accept-Encoding": "gzip, deflate, br",
  Connection: "keep-alive",
  Cookie:
    "search=6|1689120929826%7Cregion%3Dhialeah-fl-33015%26rb%3D33015%26rect%3D25.95717%252C-80.293174%252C25.920883%252C-80.342891%26disp%3Dmap%26mdm%3Dauto%26listPriceActive%3D1%26fs%3D1%26fr%3D0%26mmm%3D1%26rs%3D0%26ah%3D0%09%0972353%09%09%09%09%09%09; zguid=24|%24d2019052-a338-4296-b94e-751fbd0da966; zjs_anonymous_id=%22d2019052-a338-4296-b94e-751fbd0da966%22; zjs_user_id=null; zg_anonymous_id=%22e327b88e-86a9-4785-8010-0d64289dae75%22; _pxvid=2ecd6ca0-4a49-11ed-8b8c-ef46e055370d; _ga=GA1.2.1353852928.1665591370; utag_main=v_id:0183ccfb6c8e000a441b9c3a453605046002000900bd0$_sn:3$_se:4$_ss:0$_st:1668990954525$dc_visit:3$ses_id:1668988594407%3Bexp-session$_pn:1%3Bexp-session$dcsyncran:1%3Bexp-session$tdsyncran:1%3Bexp-session$dc_event:4%3Bexp-session$dc_region:us-east-1%3Bexp-session; __pdst=f02dd9d30a22430a91100543f52ab80c; _pin_unauth=dWlkPU1XVTNPRGRpWmpFdFpXSmhNeTAwTnpGbExUazFZalF0WlRGaE4yRXlZbUZoTVRFMA; _clck=1fqggfu|2|fce|0|1258; G_ENABLED_IDPS=google; _hp2_id.1215457233=%7B%22userId%22%3A%227542321770833028%22%2C%22pageviewId%22%3A%226177329281325843%22%2C%22sessionId%22%3A%228904368645824039%22%2C%22identity%22%3Anull%2C%22trackerVersion%22%3A%224.0%22%7D; _cs_c=0; _cs_id=45b991b1-d780-ae3f-f0c6-f822da40e9f9.1665936726.1.1665936726.1665936726.1.1700100726382; AWSALB=urXJITMN9BpBRxejNzz55r0AOXnfgwvCnIJ8HIwkoTkty5P3lh7/s7oKgnEu19NvgiElAW198EJRlZIM86mgrqFdOfyl4fPrIOTB4gVcX4+lUmCQFxFdzZIMW6mb; AWSALBCORS=urXJITMN9BpBRxejNzz55r0AOXnfgwvCnIJ8HIwkoTkty5P3lh7/s7oKgnEu19NvgiElAW198EJRlZIM86mgrqFdOfyl4fPrIOTB4gVcX4+lUmCQFxFdzZIMW6mb; JSESSIONID=2EB07BE8F7470E2FD76294F661E22E03; zgsession=1|ea53fa40-87f5-4836-89ff-d0f9fd0b109c; _gid=GA1.2.1493783966.1686528793; pxcts=eb17a6ad-08b5-11ee-ab5b-67724e735979; _px3=d6cbaca695986b65a84cd0d7f0a426518ccfff082be899f3f646955de5786032:ZQKAkhjvPhv9aqQK4H8ISBCpU7JQppqauht0FL6MjDaR1RQUmEysNRyIj+/jMzpdTcOGys7N3Qfa3FXCnaippQ==:1000:ZvifmAD8RHNfmo905Q7V6ZgGV9GNdriM+9P7HNgmGoZClTFLh1JUb62Tz4HhzGIUU1bbbHymHoU9Z+qSkNK7TEk1PHc5hRQy3IXGW0nAt/jpHfXl1m1Y07VL0+t8qxTjdezTZUbbueAMNSxN0YiYpWAcT73NWf9U6jFoVu83De/50Pl+zuXvO7FuqEL9/9b45dfHtKcBEfe1OHIpIbwxmg==; _gcl_au=1.1.608757396.1686528794; DoubleClickSession=true; _clsk=ddzd1|1686528924175|3|0|s.clarity.ms/collect; _uetsid=ec27058008b511eebf3425016d74e4fd; _uetvid=6468b4f0113b11ed87cd6396771b2693",
  TE: "trailers",
};

const zip_codes = zipcodes.lookupByName("Miami", "FL");

for (let i = 0; i < 3; i++) {

  const url = `https://www.zillow.com/homes/${zip_codes[i].zip}_rb/`;
  axios
    .get(url, {
      headers: {
        ...REQUEST_HEADERS,
      },
    })
    .then((response) => {
      const $ = cheerio.load(response.data);
      const listings: Listing[] = [];

      $(".ListItem-c11n-8-84-0__sc-10e22w8-0").each((_, element) => {
        const listing = <Listing>{};

        const $el = $(element).find('[data-test="property-card-price"]');
        const listing_price = $el.text().trim();

        if (listing_price === "") return;

        const $card = $(element).find(
          ".StyledPropertyCardHomeDetailsList-c11n-8-84-0__sc-1xvdaej-0"
        );

        $card.find("li").each((i, e) => {
          const val = $(e).text().trim();

          switch (i) {
            case 0:
              listing.beds = Number(val.split(" bds")[0]);
              break;
            case 1:
              listing.bathrooms = Number(val.split(" ba")[0]);
              break;
            case 2:
              listing.sqft = Number(val.split(" sqft")[0].split(",").join(""));
          }
        });

        listing.price = Number(listing_price.match(/\d+/g)?.join(""));

        const addr = $(element)
          .find('[data-test="property-card-addr"]')
          .text()
          .trim()
          .split(",");

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

        listings.push(listing);
      });

      console.log(listings);
    })
    .catch((error) => {
      console.log(error);
    });
}
