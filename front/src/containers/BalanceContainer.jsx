import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getTokensBalance } from '../utils/api';
import AddressBalance from '../components/AddressBalance';
import TotalUSDBalance from '../components/TotalUSDBalance';

class BalanceContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      daiBalance: 0,
      usdBalance: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    const { address } = nextProps;
    if (address !== '-') {
      getTokensBalance(address).then(({ dai, totalUSD}) => {
        this.setState({ daiBalance: dai, usdBalance: totalUSD });
      }).catch(err => console.log(err));
    }
  }

  render() {
    const { daiBalance, usdBalance } = this.state;
    const { ethBalance } = this.props;
    return (
      <div>
        <AddressBalance
          ethBalance = { ethBalance }
          daiBalance = { daiBalance }
        />
        <TotalUSDBalance usdBalance = { usdBalance } />
      </div>
    );
  }
}

BalanceContainer.propTypes = {
  address: PropTypes.string,
  ethBalance: PropTypes.string
};

export default BalanceContainer;
