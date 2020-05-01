import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

const PaginatedTableRow = ({ row }) => (
  <li className="table_row">
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

PaginatedTableRow.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    lastMonthSum: PropTypes.number.isRequired,
    incomesSum: PropTypes.number.isRequired,
    incomesAvg: PropTypes.number.isRequired,
    incomes: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        date: PropTypes.date,
      }),
    ),
  }),
};

PaginatedTableRow.defaultProps = {
  row: [],
};

export default PaginatedTableRow;
