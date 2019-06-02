import React, { Component } from 'react';
import './styles/App.css';
import { getAddress } from './utils/web3';
import { getTokensBalance } from './utils/api';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      address: "-",
      ethBalance: 0,
      daiBalance: 0,
      usdBalance: 0,
      showMetamaskMessage: false
    }
  }

  componentDidMount() {
    getAddress().then((result) => {
      if (!result) {
        return this.setState({ showMetamaskMessage: true });
      }
      const { account, balance } = result;
      this.setState({ address: account, ethBalance: balance });
      getTokensBalance(account).then(({ dai, totalUSD}) => {
        this.setState({ daiBalance: dai, usdBalance: totalUSD });
      }).catch(err => console.log(err));
    });
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          {this.state.address}
          <img height="15px" alt="address" src="/images/circle.png"/>
        </div>
        <div className="body">
          <div>
            { this.state.showMetamaskMessage ? <img height="100px" alt="metamask" src="/images/download-metamask.png"/> : ''}
          </div>
          <div className="box">
            <h3>Address Balance</h3>
            <div className="row">
              <div className="table">
                <div className="first cell">
                  ETH
                </div>
                <div className="middle cell">
                  {this.state.ethBalance}
                </div>
                <div className="last cell">
                  <img height="15px" alt="ether" src="/images/ether-logo.png"/> 
                </div>
              </div>
            </div>
            <div className="row">
              <div className="table">
                <div className="first cell">
                  DAI
                </div>
                <div className="middle cell">
                  {this.state.daiBalance}
                </div>
                <div className="last cell">
                  <img height="15px" alt="dai" src="/images/dai-logo.png"/> 
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <h3>Total USD token Balance</h3>
            <div className="row">
              <div className="table">
                <div className="first cell">
                  $
                </div>
                <div className="middle cell">
                  {this.state.usdBalance}
                </div>
                <div className="last cell money"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
