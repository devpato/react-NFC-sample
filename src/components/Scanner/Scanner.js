import React from 'react';

const Scanner = ({scanned}) => {
    return (
      <div className="scanner">
        <div className="scanner-container">
          <div className="scanner-image" />
          <div className="scanner-text">
            {scanned}
          </div>
        </div>
      </div>
    );
};

export default Scanner;