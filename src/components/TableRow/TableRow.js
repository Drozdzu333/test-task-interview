import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

const TableRow = ({ row }) => (
  <li className="table_row" key={`table_row_${row.id}${row.name}`}>
    <div className="table_row_element id">
      <h3>ID:</h3>
      <p>{row.id}</p>
    </div>
    <div className="table_row_element name">
      <h3>Name:</h3>
      <p>{row.name}</p>
    </div>
    <div className="table_row_element city">
      <h3>City:</h3>
      <p>{row.city}</p>
    </div>
    <div className="table_row_element sum">
      <h3>Sum:</h3>
      <p>{row.incomesSum}</p>
    </div>
    <div className="table_row_element lastMonth">
      <h3>Last month:</h3>
      <p>{row.lastMonthSum}</p>
    </div>
    <div className="table_row_element average">
      <h3>Average:</h3>
      <p>{row.incomesAvg}</p>
    </div>
  </li>
);

TableRow.propTypes = {
  row: PropTypes.objectOf([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

TableRow.defaultProps = {
  // bla: 'test',
};

export default TableRow;
