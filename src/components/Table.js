import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function Table() {
  const {
    getData,
    search,
    filtered,
    filters,
    clearClickedFilter,
  } = useContext(Context);

  useEffect(() => {
    getData();
  }, []);

  const searchFiltered = filtered.filter(
    (element) => element.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <ul>
        {filters.map((filter, index) => ((
          <li
            key={ index }
            data-testid="filter"
            className="filter"
          >
            {`${filter.column},${filter.comparison},${filter.value}`}
            <button
              type="button"
              onClick={ (
                () => (
                  clearClickedFilter(
                    filter.column,
                    filter.comparison,
                    filter.value,
                  )
                )
              ) }
            >
              x
            </button>
          </li>
        )))}
      </ul>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>URL</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
          </tr>
        </thead>

        <tbody>
          {searchFiltered.map((element, index) => (
            <tr key={ index }>
              <td>{ element.name }</td>
              <td>{ element.rotation_period }</td>
              <td>{ element.orbital_period }</td>
              <td>{ element.diameter }</td>
              <td>{ element.climate }</td>
              <td>{ element.gravity }</td>
              <td>{ element.terrain }</td>
              <td>{ element.surface_water }</td>
              <td>{ element.url }</td>
              <td>{ element.population }</td>
              <td>{ element.films }</td>
              <td>{ element.created }</td>
              <td>{ element.edited }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
