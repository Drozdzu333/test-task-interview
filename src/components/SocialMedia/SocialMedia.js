import React from 'react';


// styles
import './styles.scss';

// constant
import { LINKEDIN_URL, GITHUB_URL } from '../../constant/socialMediaConstant';

const SocialMedia = () => (

  <div className="header__social-media">
    <a rel="noopener noreferrer" target="_blank" href={LINKEDIN_URL}>Linked-in</a>
    <a rel="noopener noreferrer" target="_blank" href={GITHUB_URL}>Github</a>
  </div>
);

export default SocialMedia;
