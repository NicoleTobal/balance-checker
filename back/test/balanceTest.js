const chai = require('chai');
const chaiHttp = require('chai-http');
const { initializeMockServer } = require('../test/mockEthplorer');
require('../server');

const { assert } = chai;
chai.use(chaiHttp);

describe('Get balance', function() {
  const url = 'http://localhost:3001';
  const address = '0x3E18ed10bc64c03AA24556De4F051BAE3c38E286';
  const path = `/balance/${address}`;
  const daiAmount = "3381774.7001847";
  const usdAmount = "5922322.151501175";

  before(function(done) {
    initializeMockServer();
    done();
  });

  after(function(done) {
    process.exit(0);
    done();
  })

  it('Get an addresse\'s balance', function(done) {
    chai.request(url)
      .get(path)
      .end((err, res) => {
        const { dai, totalUSD } = res.body;
        assert.equal(dai, daiAmount);
        assert.equal(totalUSD, usdAmount);
        done();
      });
  });
});