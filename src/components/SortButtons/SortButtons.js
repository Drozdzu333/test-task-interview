import React from 'react';
import PropTypes from 'prop-types';

import sortBtnsArray from '../../constant/sortBtnsArrayConstant';

// Styles
import './styles.scss';

const SortButtons = ({ sortBy, onClick }) => {
  const handleOnClick = (key) => {
    onClick(key);
  };
  return (
    <div className="sortBtns">
      {sortBtnsArray.map((el) => (
        <div
          key={`sortBtns${el.key}`}
          className={`${sortBy === el.key ? 'active' : null} button-outline`}
        >
          <button
            onClick={() => handleOnClick(el.key)}
            type="button"
            id="sortLastMonth"
          >
            {el.name}
          </button>
        </div>
      ))}
    </div>
  );
};

SortButtons.propTypes = {
  sortBy: PropTypes.string,
  onClick: PropTypes.func,
};

SortButtons.defaultProps = {
  sortBy: 'name',
  onClick: '',
};

export default SortButtons;
