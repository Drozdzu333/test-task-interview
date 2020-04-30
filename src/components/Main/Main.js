import React, { useEffect, useState } from 'react';

// styles
import './styles.scss';

// constants
import { DATA_URL, INCOMES_URL } from '../../constant/dataAddressConstant';
import { itemPerPageDefault } from '../../constant/itemPerPageConstant';

// functions
import fetchData from '../../utility/fetchData';
import getParsedData from '../../utility/getParsedData';
import sortData from '../../utility/sortData';
import getFilteredData from '../../utility/getFilteredData';

// components
import PaginatedTable from '../PaginatedTable';
import SearchBar from '../SearchBar';
import SortButtons from '../SortButtons/SortButtons';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ItemPerPage from '../ItemPerPage/ItemPerPage';

const Main = () => {
  const [data, setData] = useState([]);
  const [sortDirection, setSortDirection] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [sortedData, setSortedData] = useState([...data]);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [rowPerPage, setRowPerPage] = useState(itemPerPageDefault);

  useEffect(() => {
    (async function () {
      try {
        const rawData = await fetchData(DATA_URL, INCOMES_URL);
        setData(getParsedData(rawData));
      } catch (e) {
        console.error(e);
      }
    }());
  }, []);
  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const onClick = (key) => {
    if (sortBy !== key) {
      setSortBy(key);
      setSortDirection(false);
    } else {
      setSortDirection(!sortDirection);
    }
  };
  useEffect(() => {
    setSortedData(sortData(data, sortBy, sortDirection));
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
