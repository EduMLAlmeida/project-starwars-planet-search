import React, { useContext } from 'react';
import Context from '../context/Context';

function FilterForm() {
  const {
    search,
    numeric,
    handleSearchChange,
    handleColumnChange,
    handleComparisonChange,
    handleValueChange,
    saveFilter,
    availableColumns,
  } = useContext(Context);

  return (
    <form>
      <label
        htmlFor="name-filter"
      >
        Busca:
        <input
          data-testid="name-filter"
          id="name-filter"
          value={ search }
          onChange={ handleSearchChange }
        />
      </label>

      <label
        htmlFor="column-filter"
      >
        Coluna:
        <select
          data-testid="column-filter"
          id="column-filter"
          value={ numeric.column }
          onChange={ handleColumnChange }
        >
          {
            availableColumns.map(
              (columnAvailableOption) => (
                <option
                  key={ columnAvailableOption }
                  value={ `${columnAvailableOption}` }
                >
                  { columnAvailableOption }
                </option>
              ),
            )
          }
          {/* <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option> */}
        </select>
      </label>

      <label
        htmlFor="comparison-filter"
      >
        Operador:
        <select
          data-testid="comparison-filter"
          id="comparison-filter"
          value={ numeric.comparison }
          onChange={ handleComparisonChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <input
        type="number"
        data-testid="value-filter"
        value={ numeric.value }
        onChange={ handleValueChange }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ saveFilter }
      >
        Filtrar
      </button>
    </form>
  );
}

export default FilterForm;
