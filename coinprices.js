const fetch = require("node-fetch");
const https = require("https");
const CMC_API_KEY = "f32ef017-dc5b-4e0d-b140-06b6356c7b80";
const CMC_endpoint =
  "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest";

async function getPrices() {
  let priceRes = await fetch(`${CMC_endpoint}?symbol=HLTH`, {
    headers: {
      "X-CMC_PRO_API_KEY": CMC_API_KEY,
    },
  });
  let tokenPriceBody = await priceRes.json();

  console.log(tokenPriceBody.data);
}

//getPrices();

/*async function getPricesA() {
  let priceRes = await fetch(
    `https://rest.coinapi.io/v1/exchangerate/BNB/INR`,
    {
      headers: {
        "X-CoinAPI-Key": "38A06F0D-C882-4310-A3F9-2688D7B7BFB5",
      },
    }
  );
  let tokenPriceBody = await priceRes.json();

  console.log(tokenPriceBody.rate);
}

getPricesA();*/

fetch(
  "https://api.nomics.com/v1/currencies/ticker?key=6ebeac38f5b0a8ccb1297b0acf04e3a00c99ec2c&ids=BTC,ETH,XRP"
)
  .then((response) => response.json())
  .then((data) => console.log(data));
