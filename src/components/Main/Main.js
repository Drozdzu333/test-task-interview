import React, { useEffect, useState } from 'react';

import { DATA_URL, INCOMES_URL } from '../../constant/dataAddressConstant';
import { itemPerPageDefault } from '../../constant/itemPerPageConstant';

import getDataFromAPI from '../../utility/getDataFromAPI';
import getParsedData from '../../utility/getParsedData';
import getSortData from '../../utility/getSortData';
import getFilteredData from '../../utility/getFilteredData';

import PaginatedTable from '../PaginatedTable';
import SearchBar from '../SearchBar';
import SortButtons from '../SortButtons/SortButtons';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ItemPerPage from '../ItemPerPage/ItemPerPage';

const Main = () => {
  const [data, setData] = useState([]);
  const [sortDirection, setSortDirection] = useState(true);
  const [sortBy, setSortBy] = useState('name');
  const [sortedData, setSortedData] = useState([...data]);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [rowPerPage, setRowPerPage] = useState(itemPerPageDefault);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchAPI() {
      try {
        const rawData = await getDataFromAPI(DATA_URL, INCOMES_URL);
        setData(getParsedData(rawData));
      } catch (e) {
        setError(true);
      }
    }
    fetchAPI();
  }, []);

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const onClick = (key) => {
    if (sortBy !== key) {
      setSortBy(key);
      setSortDirection(true);
    } else {
      setSortDirection(!sortDirection);
    }
  };
  useEffect(() => {
    setSortedData(getSortData(data, sortBy, sortDirection));
  }, [sortBy, sortDirection, data]);

  const onChange = (a) => {
    setSearch(a);
  };
  useEffect(() => {
    if (search === '') {
      setFilteredData(sortedData);
    } else {
      setFilteredData(getFilteredData(sortedData, search));
    }
  }, [search, sortedData, data]);
  return (
    <main className="table">
      {error && <h2 style={{ fontSize: '5rem' }}>błąd połączenia</h2>}
      {!data.length ? (
        <LoadingSpinner />
      ) : (
        <div className="container">
          <div className="table__header">
            <SearchBar onChange={(a) => onChange(a)} search={search} />
            <SortButtons sortBy={sortBy} onClick={(key) => onClick(key)} />
            <ItemPerPage
              rowPerPage={rowPerPage}
              setRows={(rows) => setRowPerPage(rows)}
            />
          </div>
          <PaginatedTable rowPerPage={rowPerPage} data={filteredData} />
        </div>
      )}
    </main>
  );
};

export default Main;
