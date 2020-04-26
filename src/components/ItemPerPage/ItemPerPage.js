/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

// Styles

import './styles.scss';
// Constant
import { itemPerPageArr } from '../../constant/itemPerPageConstant';

const ItemPerPage = ({ rowPerPage, setRows }) => {
  const onChange = (e) => {
    setRows(Number(e.target.value));
  };
  return (
    <div className="ItemPerPageWrapper">
      <label htmlFor="perPage">Items per page</label>
      <select onChange={onChange} id="perPage">
        {itemPerPageArr.map((el) => (rowPerPage === el ? (
          <option selected value={el}>
            {el}
          </option>
        ) : (
          <option value={el}>{el}</option>
        )))}
      </select>
    </div>
  );
};

ItemPerPage.propTypes = {
  rowPerPage: PropTypes.number,
  setRows: PropTypes.func,
};

ItemPerPage.defaultProps = {
  rowPerPage: 5,
  setRows: [],
};
export default ItemPerPage;
