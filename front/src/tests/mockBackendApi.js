const nock = require('nock')

const initializeMockServer = (address) => {
  nock('https://balance-checker-back.herokuapp.com')
    .persist()
    .get(`/balance/${address}`)
    .reply(200, {
      dai: 2000000,
      totalUSD: 40000000
    })
}

module.exports = {
  initializeMockServer
};