import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchData from '../services/API';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const getData = async () => {
    const dataResponse = await fetchData();
    setData(dataResponse.results);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const contextValue = {
    data,
    getData,
    search,
    handleSearchChange,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  // "node" abaixo escolhido com base no link: https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children
  children: PropTypes.node.isRequired,
};

export default Provider;
