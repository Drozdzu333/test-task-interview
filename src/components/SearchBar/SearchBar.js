import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

const SearchBar = ({ search, onChange }) => {
  const handleOnChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="searchBar">
      <input
        type="text"
        value={search}
        onChange={handleOnChange}
        placeholder="Search"
      />
    </div>
  );
};

SearchBar.propTypes = {
  search: PropTypes.string,
  onChange: PropTypes.func,
};

SearchBar.defaultProps = {
  onChange: '',
  search: '',
};

export default SearchBar;
