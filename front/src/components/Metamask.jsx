import React from 'react';

export default function Metamask (props) {
  return (
    <div>
      { props.showMetamaskMessage ?
        <img height="100px" alt="metamask" src="/images/download-metamask.png"/>
        : ''
      }
    </div>
  );
}