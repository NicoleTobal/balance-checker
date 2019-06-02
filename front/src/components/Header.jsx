import React from 'react';

export default function Header ({ address }) {
  return (
    <div className="header">
      {address}
      <img height="15px" alt="address" src="/images/circle.png"/>
    </div>
  );
}