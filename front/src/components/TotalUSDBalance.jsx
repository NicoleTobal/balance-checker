import React from 'react';

export default function TotalUSDBalance ({ usdBalance }) {
  return (
    <div className="box">
      <h3>Total USD token Balance</h3>
      <div className="row">
        <div className="table">
          <div className="first cell">
            $
          </div>
          <div className="middle cell">
            {usdBalance}
          </div>
          <div className="last cell money"/>
        </div>
      </div>
    </div>
  );
}