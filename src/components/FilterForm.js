import React, { useContext } from 'react';
import Context from '../context/Context';

function FilterForm() {
  const {
    search,
    handleSearchChange,
  } = useContext(Context);

  return (
    <form>
      <label
        htmlFor="name-filter"
      >
        Search:
        <input
          data-testid="name-filter"
          id="name-filter"
          value={ search }
          onChange={ handleSearchChange }
        />
      </label>
    </form>
  );
}

export default FilterForm;
