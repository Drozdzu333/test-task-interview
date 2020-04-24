import React, { useEffect, useState } from 'react';

// styles
import './styles.scss';

// constant
import { DATA_URL, INCOMES_URL } from '../../constant/dataAddressConstant';
import fetchData from '../../utility/fetchData';
import getParsedData from '../../utility/getParsedData';
import sortData from '../../utility/sortData';
import getFilteredData from '../../utility/getFilteredData';
import sortBtnsArray from '../../constant/sortBtnsArray';
import PaginatedTable from '../PaginatedTable/PaginatedTable';
import SearchBar from './SearchBar/SearchBar';

const Main = () => {
  const [data, setData] = useState([]);
  const [sortDirection, setSortDirection] = useState(!false);
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
  const handleOnClick = (name) => {
    if (sortBy !== name) {
      setSortBy(name);
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
      <div className="container">
        <div className="table__header">
          <SearchBar onChange={(a) => onChange(a)} search={search} />
          <div className="table__sortBtns">
            {sortBtnsArray.map((el) => <button className={sortBy === el.key ? 'active' : null} key={el.key} onClick={() => handleOnClick(el.key)} type="button" id="sortLastMonth">{el.name}</button>)}
          </div>
        </div>
        <PaginatedTable data={filteredData} />
      </div>
    </main>
  );
};

export default Main;
