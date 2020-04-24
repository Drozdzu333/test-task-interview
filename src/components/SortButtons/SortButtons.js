import React from 'react';
import PropTypes from 'prop-types';

// constants
import sortBtnsArray from '../../constant/sortBtnsArray';

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
          className={`${sortBy === el.key ? 'active' : null} button-outline`}
        >
          <button
            key={el.key}
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
