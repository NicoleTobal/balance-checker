import React, { Component } from 'react';
import './styles/App.css';
import { getAddress } from './utils/web3';
import Header from './components/Header';
import Metamask from './components/Metamask';
import BalanceContainer from './containers/BalanceContainer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      address: "-",
      ethBalance: "0",
      showMetamaskMessage: false
    }
  }

  componentDidMount() {
    getAddress().then(result => {
      if (!result) {
        return this.setState({ showMetamaskMessage: true });
      }
      const { account, balance } = result;
      this.setState({ address: account, ethBalance: balance });
    }).catch(err => console.log(err));
  }

  render() {
    const { address, ethBalance, showMetamaskMessage } = this.state;
    return (
      <div className="App">
        <Header address = { address } />
        <div className="body">
          <Metamask showMetamaskMessage = { showMetamaskMessage } />
          <BalanceContainer
            address = { address }
            ethBalance = { ethBalance }
          />
        </div>
      </div>
    );
  }
}

export default App;
