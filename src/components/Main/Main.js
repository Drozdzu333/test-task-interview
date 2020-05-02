import React, { useState } from 'react';

import { itemPerPageDefault } from '../../constant/itemPerPageConstant';

import useCompaniesData from '../../utility/useCompaniesData';

import PaginatedTable from '../PaginatedTable';
import SearchBar from '../SearchBar';
import SortButtons from '../SortButtons/SortButtons';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ItemPerPage from '../ItemPerPage/ItemPerPage';

const Main = () => {
  const {
    data, sort, search, onChange, onClick, error,
  } = useCompaniesData();

  const [rowPerPage, setRowPerPage] = useState(itemPerPageDefault);

  return (
    <main className="table">
      {error && <h2 style={{ fontSize: '5rem' }}>błąd połączenia</h2>}
      {!data.length ? (
        <LoadingSpinner />
      ) : (
        <div className="container">
          <div className="table__header">
            <SearchBar onChange={(a) => onChange(a)} search={search} />
            <SortButtons sortBy={sort.sortBy} onClick={(key) => onClick(key)} />
            <ItemPerPage
              rowPerPage={rowPerPage}
              setRows={(rows) => setRowPerPage(rows)}
            />
          </div>
          <PaginatedTable rowPerPage={rowPerPage} data={data} />
        </div>
      )}
    </main>
  );
};

export default Main;
