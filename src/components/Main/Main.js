import React, { useEffect, useState } from 'react';

// styles
import './styles.scss';

// constant
import { DATA_URL, INCOMES_URL } from '../../constant/dataAddressConstant';
import fetchData from '../../utility/fetchData';
import getParsedData from '../../utility/getParsedData';

const Main = () => {
  const [data, setData] = useState([]);
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
  return (
    <main>
      <ul>
        {data.map((el) => (
          <li key={el.id}>
            {el.name}
            {el.city}
            {el.id}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
