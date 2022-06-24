const Web3 = require("web3");

const url =
  "https://HLTH:789Forest@apis.ankr.com/9950f8d50d4b4cf48c8cd66fc544a31b/db2ee6d2208b14f582ce09cbc7811f74/binance/full/main"; // url string

const Web3js = new Web3(new Web3.providers.HttpProvider(url));

let amount = Web3js.utils.toWei("1");

console.log(amount.length);
