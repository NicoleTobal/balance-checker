const express = require('express');
const cors = require('cors');
const { getBalance } = require('./utils');

const port = process.env.PORT || 3001;

const app = express();

app.use(cors({ origin: "*" }));

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
    reply.status(500).send(err);
  }
});

app.listen(port, async (err) => {
  if (err) {
    throw err;
  }
  console.log('App listening on port ', port);
})