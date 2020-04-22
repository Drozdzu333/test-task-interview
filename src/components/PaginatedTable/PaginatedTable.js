/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import TableRow from '../TableRow/TableRow';


const PaginatedTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Logic for displaying current todo
  const todoPerPage = 10;
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
  const handleClick = (e) => {
    setCurrentPage(e.target.id);
  };
  // const renderPageNumbers =
  // ));

  return (
    <div>
      <ul>
        {renderTodo}
      </ul>
      <ul id="page-numbers">
        {pageNumbers.map((number) => (<li className={currentPage === number ? 'active' : null} key={`page_number_${number}`} id={number} onClick={handleClick}>{number}</li>))}
      </ul>
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
