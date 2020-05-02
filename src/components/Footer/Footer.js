import React from 'react';

// styles
import './styles.scss';

import { PHONE_NUMBER, EMAIL_URL } from '../../constant/concatConstant';

import SocialMedia from '../SocialMedia/SocialMedia';

const Footer = () => (
  <footer id="footer">
    <div className="container">
      <div className="footer__contact">
        <h2>Contact for developer</h2>
        <div className="footer_contact_links">
          <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
          <a href={`mailto:${EMAIL_URL}`}>{EMAIL_URL}</a>
        </div>
      </div>
      <SocialMedia />
    </div>
  </footer>
);

export default Footer;
