import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function Table() {
  const { getData, data } = useContext(Context);

  useEffect(() => {
    getData();
  }, []);

  return (
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
        {data.map((element, index) => (
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
  );
}

export default Table;
