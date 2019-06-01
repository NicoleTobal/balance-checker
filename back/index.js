const express = require('express');
const { getBalance } = require('./utils');

const app = express();

/**
  * @api {get} /balance/:address Returns an address's balance  
  * @apiParam {String} address
*/
app.get('/balance/:address', async (request, reply) => {
  try {
    const { address } = request.params;
    const balances = await getBalance(address);
    reply.status(200).send(balances);
  } catch (err) {
    console.log(err);
    reply.status(500).send(err);
  }
});

app.listen(3000, async (err) => {
  if (err) {
    throw err;
  }
  console.log('App listening on port 3000');
})