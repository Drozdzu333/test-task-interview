import React from 'react';

// styles
import './styles.scss';
import SocialMedia from '../SocialMedia/SocialMedia';

// constant
import { PHONE_NUMBER, EMAIL_URL } from '../../constant/concatConstant';

const Footer = () => (
  <footer className="footer">
    <div className="footer__contact">
      <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
      <a href={`mailto:${EMAIL_URL}`}>{EMAIL_URL}</a>
    </div>
    <SocialMedia />
  </footer>
);

export default Footer;
