/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

const PageNumbers = ({ pageNumbers, currentPage, onClick }) => {
  const handleOnClick = (number) => {
    onClick(number);
  };
  return (
    <ul id="page-numbers">
      {pageNumbers.map((number) => (<li className={currentPage === number ? 'active' : null} key={`page_number_${number}`} id={number} onClick={() => handleOnClick(number)}>{number}</li>))}
    </ul>
  );
};

PageNumbers.propTypes = {
  pageNumbers: PropTypes.arrayOf(['numbers']),
  currentPage: PropTypes.number,
  onClick: PropTypes.func,
};

PageNumbers.defaultProps = {
  pageNumbers: 1,
  currentPage: 1,
  onClick: '',
};

export default PageNumbers;
