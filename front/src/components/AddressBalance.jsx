import React from 'react';

export default function AddressBalance ({ ethBalance, daiBalance }) {
  return (
    <div className="box">
      <h3>Address Balance</h3>
      <div className="row">
        <div className="table">
          <div className="first cell">
            ETH
          </div>
          <div className="middle cell">
            {ethBalance}
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
            {daiBalance}
          </div>
          <div className="last cell">
            <img height="15px" alt="dai" src="/images/dai-logo.png"/> 
          </div>
        </div>
      </div>
    </div>
  );
}