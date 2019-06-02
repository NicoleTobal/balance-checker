const request = require('request');
const BigNumber = require('bignumber.js');

const etherValueInWei = 1000000000000000000;

const parseTokens = tokens => {
  let dai = 0;
  let totalUSD = 0;
  if (tokens) {
    tokens.forEach(token => {
      const tokenAmountInEthers = BigNumber(token.balance).dividedBy(etherValueInWei).toFixed();
      const tokenAmount = parseFloat(tokenAmountInEthers);
      if (token.tokenInfo.symbol === 'DAI') dai = tokenAmount;
      if (token.tokenInfo.price.rate) totalUSD += token.tokenInfo.price.rate * tokenAmount;
    })
  }
  return { dai, totalUSD };
}

const getBalance = address => new Promise((resolve, reject) => {
  const url = `http://api.ethplorer.io/getAddressInfo/${address}?apiKey=freekey`;
  request(url, function (error, response, body) {
    if (error) {
      return reject(error);
    }
    const parsedBody = JSON.parse(body);
    const tokensResult = parseTokens(parsedBody.tokens); 
    resolve(tokensResult);
  });
});

module.exports = {
  getBalance
}