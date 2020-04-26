import React, { useEffect, useState } from 'react';

// styles
import './styles.scss';

// constants
import { DATA_URL, INCOMES_URL } from '../../constant/dataAddressConstant';

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

const Main = () => {
  const [data, setData] = useState([]);
  const [sortDirection, setSortDirection] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [sortedData, setSortedData] = useState([...data]);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // Fetch and set data object
  useEffect(() => {
    // eslint-disable-next-line func-names
    (async function () {
      try {
        const rawData = await fetchData(DATA_URL, INCOMES_URL);
        setData(getParsedData(rawData));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }());
  }, []);
  useEffect(() => {
    setSortedData(data);
  }, [data]);

  // Sort data function
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

  // Search data function
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
      {!data.length ? <LoadingSpinner /> : (
        <div className="container">
          <div className="table__header">
            <SearchBar onChange={(a) => onChange(a)} search={search} />
            <SortButtons sortBy={sortBy} onClick={(key) => onClick(key)} />
          </div>
          <PaginatedTable data={filteredData} />
        </div>
      )}
    </main>
  );
};

export default Main;
