import React from 'react';

// Styles
import './styles.scss';

const LoadingSpinner = () => (
  <div id="loadingSpinnerWrapper">
    <div className="loadingSpinner__filter">
      <div className="loadingSpinner__text-holder">
        <h2>Loading</h2>
      </div>
    </div>
  </div>
);
export default LoadingSpinner;
