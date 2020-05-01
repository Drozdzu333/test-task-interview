import React from 'react';

// styles
import './styles.scss';

import SocialMedia from '../SocialMedia/SocialMedia';

const Header = () => (
  <header id="header">
    <div className="container">
      <h1 className="header__h1">Created by Michał Rożdżyński</h1>
      <SocialMedia />
    </div>
  </header>
);

export default Header;
