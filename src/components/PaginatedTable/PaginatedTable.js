import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import TableRow from '../TableRow/TableRow';
import PageNumbers from '../PageNumbers/PageNumbers';
import ROWS_PER_PAGE from '../../constant/rowsPerPage';


const PaginatedTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Logic for displaying current todo
  const todoPerPage = ROWS_PER_PAGE;
  const indexOfLastTodo = currentPage * todoPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todoPerPage;
  const currentTodo = data.slice(indexOfFirstTodo, indexOfLastTodo);

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
      <PageNumbers pageNumbers={pageNumbers} currentPage={currentPage} onClick={(number) => handleClick(number)} />
    </div>
  );
};

PaginatedTable.propTypes = {
  data: PropTypes.arrayOf([PropTypes.object]),
};

PaginatedTable.defaultProps = {
  data: [],
};

export default PaginatedTable;
