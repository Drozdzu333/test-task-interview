import React, { useEffect, useState } from 'react';

// styles
import './styles.scss';

// constant
import { DATA_URL, INCOMES_URL } from '../../constant/dataAddressConstant';
import fetchData from '../../utility/fetchData';
import getParsedData from '../../utility/getParsedData';
import sortData from '../../utility/sortData';
import getFilteredData from '../../utility/getFilteredData';

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
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    if (search === '') {
      setFilteredData(sortedData);
    } else {
      setFilteredData(getFilteredData(sortedData, search));
    }
  }, [search, sortedData]);


  return (
    <main>
      <input type="text" value={search} onChange={handleChange} placeholder="Search" />
      {/* Zrobić arraykę z buttonami */}
      <button onClick={() => handleOnClick('id')} type="button" id="sortId">id</button>
      <button onClick={() => handleOnClick('name')} type="button" id="sortName">Name</button>
      <button onClick={() => handleOnClick('city')} type="button" id="sortCity">City</button>
      <button onClick={() => handleOnClick('incomesSum')} type="button" id="sortSum">Sum</button>
      <button onClick={() => handleOnClick('incomesAvg')} type="button" id="sortAverage">Average</button>
      <button onClick={() => handleOnClick('lastMonthSum')} type="button" id="sortLastMonth">Last month</button>
      <ul>
        {filteredData.map((el) => (
          <li key={el.id}>
            <p>
              ID:
              {' '}
              {el.id}
            </p>
            <p>
              Name:
              {' '}
              {el.name}
            </p>
            <p>
              City:
              {' '}
              {el.city}
            </p>
            <p>
              Sum:
              {' '}
              {el.incomesSum}
            </p>
            <p>
              Last month:
              {' '}
              {el.lastMonthSum}
            </p>
            <p>
              Average:
              {' '}
              {el.incomesAvg}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
