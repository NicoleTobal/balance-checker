const nock = require('nock')

const initializeMockServer = () => {
  nock('http://api.ethplorer.io')
    .persist()
    .get('/getAddressInfo/0x3E18ed10bc64c03AA24556De4F051BAE3c38E286?apiKey=freekey')
    .reply(200, {
        tokens: [
          {
            balance: 1.0371561160398e+22,
            tokenInfo: {
              symbol: 'WETH',
              price: {
                rate: 244.793863713,
              }
            }
          },
          {
            balance: 3.3817747001847e+24,
            tokenInfo: {
              symbol: 'DAI',
              price: {
                rate: 1.00048877358
              }
            }
          } 
        ]
    })
}

module.exports = {
  initializeMockServer
};