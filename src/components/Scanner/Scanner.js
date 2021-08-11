import React from 'react';
import './Scanner.css'
import Spinner from '../../spinner.gif';

const Scanner = ({status}) => {
    return (
      <div className="scanner">
        <p className="scanner-exit">X</p>
        <div className="scanner-container">
          <img src={Spinner} alt="spinning log" className="scanner-image"/>
          <p className="scanner-text">
            Scanning...
          </p>
        </div>
      </div>
    );
};

export default Scanner;