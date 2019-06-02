import request from 'request';

const backendHost = 'https://balance-checker-back.herokuapp.com';

export const getTokensBalance = (address) => new Promise((resolve, reject) => {
  const url = backendHost + `/balance/${address}`;
  request(url, function (error, response, body) {
    if (error) {
      return reject(error);
    }
    resolve(JSON.parse(body));
  });
});