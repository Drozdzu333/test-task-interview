import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Components
import TableRow from '../TableRow/TableRow';
import PageNumbers from '../PageNumbers/PageNumbers';


const PaginatedTable = ({ rowPerPage, data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Logic for displaying current todo
  const todoPerPage = rowPerPage;
  const indexOfLastTodo = currentPage * todoPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todoPerPage;
  const currentTodo = data.slice(indexOfFirstTodo, indexOfLastTodo);

  // Change default for search
  useEffect(() => {
    setCurrentPage(1);
  }, [data, rowPerPage]);

  const renderTodo = currentTodo.map((el) => (
    <TableRow row={el} />
  ));
  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / todoPerPage); i += 1) {
    pageNumbers.push(i);
  }
  const handleClick = (number) => {
    setCurrentPage(number);
  };
  return (
    <div>
      <ul>
        {renderTodo}
      </ul>
      <PageNumbers
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        onClick={
        (number) => handleClick(number)
}
      />
    </div>
  );
};

PaginatedTable.propTypes = {
  data: PropTypes.arrayOf([
    PropTypes.objectOf([PropTypes.string, PropTypes.number, PropTypes.array])]),
  rowPerPage: PropTypes.number,
};

PaginatedTable.defaultProps = {
  data: [],
  rowPerPage: 20,
};

export default PaginatedTable;
