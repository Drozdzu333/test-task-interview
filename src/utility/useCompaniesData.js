import { useEffect, useState } from 'react';

import { DATA_URL, INCOMES_URL } from '../constant/dataAddressConstant';

import getCompaniesDataAPI from './getCompaniesData';
import getParsedData from './getParsedData';
import getSortData from './getSortData';
import getFilteredData from './getFilteredData';

const useCompaniesData = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([...data]);
  const [filteredData, setFilteredData] = useState([]);

  const [sortDirection, setSortDirection] = useState(true);
  const [sortBy, setSortBy] = useState('name');

  const [search, setSearch] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    (async function fetchAPI() {
      try {
        const rawData = await getCompaniesDataAPI(DATA_URL, INCOMES_URL);
        setData(getParsedData(rawData));
      } catch (e) {
        setError(true);
      }
    }());
  }, []);

  useEffect(() => {
    setSortedData(getSortData(data, sortBy, sortDirection));
  }, [sortBy, sortDirection, data]);

  useEffect(() => {
    if (search === '') {
      setFilteredData(sortedData);
    } else {
      setFilteredData(getFilteredData(sortedData, search));
    }
  }, [search, sortedData]);

  return {
    data: filteredData,
    onChange: (e) => setSearch(e),
    onClick: (key) => {
      if (sortBy !== key) {
        setSortBy(key);
        setSortDirection(true);
      } else {
        setSortDirection(!sortDirection);
      }
    },
    sort: {
      value: sortBy,
    },
    search,
    error,
  };
};

export default useCompaniesData;
