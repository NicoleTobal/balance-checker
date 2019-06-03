import React from 'react';
import Web3 from 'web3';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { waitForState } from 'enzyme-async-helpers';
import ganacheCli from 'ganache-cli';
import { initializeMockServer } from './mockBackendApi';
import App from '../App';
import BalanceContainer from '../containers/BalanceContainer';

enzyme.configure({ adapter: new Adapter() });

const currentProvider = ganacheCli.provider();

global.web3 = { currentProvider }
global.ethereum = { enable: () => Promise.resolve(true) }

const web3 = new Web3(currentProvider);

it('App initializes with an address and ETH balance', async () => {
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];

  const app = await enzyme.mount(<App />);
  await waitForState(app, state => state.address !== "-");
  expect(app.instance().state.address).toBe(account);
  expect(app.instance().state.ethBalance).toBe("100000000000000000000");
});

it('App shows dai amount and total USD in tokens for a given address', async () => {
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  initializeMockServer(account);

  const app = await enzyme.mount(<App />);
  const balanceContainer = app.find(BalanceContainer);
  await waitForState(balanceContainer, state => state.daiBalance !== 0);
  expect(balanceContainer.instance().state.daiBalance).toBe(2000000);
  expect(balanceContainer.instance().state.usdBalance).toBe(40000000);
});
