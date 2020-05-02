import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

import { itemPerPageArr } from '../../constant/itemPerPageConstant';

const ItemPerPage = ({ rowPerPage, setRows }) => {
  const onChange = (e) => {
    setRows(Number(e.target.value));
  };
  return (
    <div className="ItemPerPageWrapper">
      <label htmlFor="perPage">
        Items per page:
        {' '}
        <select value={rowPerPage} onChange={onChange} id="perPage">
          {itemPerPageArr.map((el) => (
            <option key={`perPage${el}`} value={el}>
              {el}
            </option>
          ))}
        </select>
      </label>
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
