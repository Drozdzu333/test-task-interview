import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PaginatedTableRow from '../PaginatedTableRow';
import PaginationPagesNumbers from '../PaginationPagesNumbers';

const PaginatedTable = ({ rowPerPage, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setCurrentPage(1);
  }, [data]);
  const handleClick = (number) => {
    setCurrentPage(number);
  };

  const indexOfLastTodo = currentPage * rowPerPage;
  const indexOfFirstTodo = indexOfLastTodo - rowPerPage;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / rowPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <PaginatedTableRow
        currentTodo={data.slice(indexOfFirstTodo, indexOfLastTodo)}
      />
      <PaginationPagesNumbers
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        onClick={(number) => handleClick(number)}
      />
    </div>
  );
};

PaginatedTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
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
  ),
  rowPerPage: PropTypes.number,
};

PaginatedTable.defaultProps = {
  data: [],
  rowPerPage: 20,
};

export default PaginatedTable;
