import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchData from '../services/API';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [numeric, setNumeric] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [filters, setFilters] = useState([]);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [availableColumns, setAvailableColumns] = useState([]);

  const getData = async () => {
    const dataResponse = await fetchData();

    setData(dataResponse.results);
  };

  const saveFilter = () => {
    setFilters([
      ...filters,
      {
        column: numeric.column,
        comparison: numeric.comparison,
        value: numeric.value,
      },
    ]);
  };

  const handleColumns = () => {
    const columns = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];

    const unavailableColumns = filters.map(
      (filter) => filter.column,
    );

    const availableColumns2 = [];

    columns.forEach((columnOption) => {
      const test = unavailableColumns.find(
        (unavailableColumnOption) => columnOption === unavailableColumnOption,
      );
      if (!test) {
        availableColumns2.push(columnOption);
      }
    });

    setNumeric({
      ...numeric,
      column: availableColumns2[0],
    });

    setAvailableColumns(availableColumns2);
  };

  const handleFilter = () => {
    let planets = data;

    if (filters.length) {
      filters.forEach((savedFilter) => {
        if (savedFilter.comparison === 'maior que') {
          planets = planets.filter(
            (planet) => parseInt(
              planet[savedFilter.column], 10,
            ) > savedFilter.value,
          );
        } else if (savedFilter.comparison === 'menor que') {
          planets = planets.filter(
            (planet) => parseInt(
              planet[savedFilter.column], 10,
            ) < savedFilter.value,
          );
        } else if (savedFilter.comparison === 'igual a') {
          planets = planets.filter(
            (planet) => parseInt(
              planet[savedFilter.column], 10,
            ) === Number(savedFilter.value),
          );
        }
      });
    }

    handleColumns();
    setFiltered(planets);
  };

  useEffect(() => {
    handleFilter();
  }, [data, filters]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleColumnChange = (event) => {
    setNumeric({
      ...numeric,
      column: event.target.value,
    });
  };

  const handleComparisonChange = (event) => {
    setNumeric({
      ...numeric,
      comparison: event.target.value,
    });
  };

  const handleValueChange = (event) => {
    setNumeric({
      ...numeric,
      value: event.target.value,
    });
  };

  const contextValue = {
    getData,
    search,
    filtered,
    numeric,
    handleSearchChange,
    handleColumnChange,
    handleComparisonChange,
    handleValueChange,
    saveFilter,
    availableColumns,
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
