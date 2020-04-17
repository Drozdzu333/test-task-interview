import React from 'react';

// styles
import './styles.scss';

// components
import SocialMedia from '../SocialMedia/SocialMedia';

const Header = () => (
  <header className="header">
    <h1 className="header__h1">Create by Michał Rożdżyński</h1>
    <SocialMedia />
  </header>
);

export default Header;
