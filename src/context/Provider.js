import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchData from '../services/API';

function Provider({ children }) {
  const [data, setData] = useState([]);

  const getData = async () => {
    const dataResponse = await fetchData();
    setData(dataResponse.results);
  };

  const contextValue = {
    data,
    setData,
    getData,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default Provider;
