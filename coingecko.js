const fetch = require("node-fetch");

/*async function coinList() {
  const CG_endpoint =
    "https://api.coingecko.com/api/v3/coins/list?include_platform=false";
  let priceRes = await fetch(`${CG_endpoint}`);
  let coinsList = await priceRes.json();

  console.log(coinsList.filter((val) => val.symbol === "btc"));
}*/

async function coinList() {
  const CG_endpoint =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,binancecoin,tether,hlth-token&vs_currencies=inr";
  let priceRes = await fetch(
    `${CG_endpoint}` /*{
    headers: {
      "X-CMC_PRO_API_KEY": CMC_API_KEY,
    },
  }*/
  );
  let coinsList = await priceRes.json();

  console.log(coinsList);
}

coinList();
