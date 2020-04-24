import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

const SearchBar = (props) => {
  const { search } = props;
  const onChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <div className="searchBar">
      <input
        type="text"
        value={search}
        onChange={onChange}
        placeholder="Search"
      />
    </div>
  );
};

SearchBar.propTypes = {
  handleOnChange: PropTypes.func,
  search: PropTypes.string,
};

// SearchBar.defaultProps = {
//   onChange: '',
//   search: '',
// };

export default SearchBar;
