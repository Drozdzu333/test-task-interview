import React from 'react';

// Styles
import './styles.scss';

const LoadingSpinner = () => (
  <div id="loadingSpinnerWrapper">
    <div className="loadingSpinner__filter">
      <div className="loadingSpinner__text-holder">
        <span>Loading</span>
      </div>
    </div>
  </div>
);
export default LoadingSpinner;
