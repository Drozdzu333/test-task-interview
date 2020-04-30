import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

const PageNumbers = ({ pageNumbers, currentPage, onClick }) => {
  const handleOnClick = (number) => {
    onClick(number);
  };
  return (
    <nav aria-label="Pagination Navigation">
      <ul role="presentation" id="page-numbers">
        {pageNumbers.map((number) => (
          <li
            className={currentPage === number ? 'active' : null}
            key={`page_number_${number}`}
            id={number}
            onClick={() => handleOnClick(number)}
            role="presentation"
            aria-current={currentPage === number}
            aria-label={`Page ${number}`}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};

PageNumbers.propTypes = {
  pageNumbers: PropTypes.arrayOf(PropTypes.number),
  currentPage: PropTypes.number,
  onClick: PropTypes.func,
};

PageNumbers.defaultProps = {
  pageNumbers: 1,
  currentPage: 1,
  onClick: '',
};

export default PageNumbers;
