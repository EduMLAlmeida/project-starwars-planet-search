const URL = 'https://swapi-trybe.herokuapp.com/api/planets';

const fetchData = async () => {
  const response = await fetch(URL);
  const data = response.json();
  return data;
};

export default fetchData;
