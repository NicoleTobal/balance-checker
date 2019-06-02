import Web3 from 'web3';

export const getAddress = async () => {
  let web3;
  if (typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider);
  } else {
    return;
  }
  await window.ethereum.enable();
  const accounts =await web3.eth.getAccounts();
  const account = accounts[0];
  const balance = await web3.eth.getBalance(account);
  return { account, balance };
}