import React from 'react';

// Styles
import './styles.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

const PageContainer = () => (
  <div className="PageContainerWrapper">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default PageContainer;
