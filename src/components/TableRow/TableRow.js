import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

const TableRow = ({ row }) => (
  <li className="table_row" key={`table_row_${row.id}${row.name}`}>
    <p>
      ID:
      {' '}
      {row.id}
    </p>
    <p>
      Name:
      {' '}
      {row.name}
    </p>
    <p>
      City:
      {' '}
      {row.city}
    </p>
    <p>
      Sum:
      {' '}
      {row.incomesSum}
    </p>
    <p>
      Last month:
      {' '}
      {row.lastMonthSum}
    </p>
    <p>
      Average:
      {' '}
      {row.incomesAvg}
    </p>
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
