import request from 'request';

export const getTokensBalance = (address) => new Promise((resolve, reject) => {
  const url = `http://localhost:3001/balance/${address}`;
  request(url, function (error, response, body) {
    if (error) {
      return reject(error);
    }
    resolve(JSON.parse(body));
  });
});