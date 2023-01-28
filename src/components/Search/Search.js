import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOptions } from '../../api';
import Logo from '../Logo/Logo';
import './search.scss';

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(`${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`, geoApiOptions)
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude},${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })

      .catch((err) => console.error(err));
  };

  const handleOnChange = (searcData) => {
    setSearch(searcData);
    onSearchChange(searcData);
  };
  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo />
        <AsyncPaginate
          placeholder="Search for city"
          debounceTimeout={600}
          value={search}
          onChange={handleOnChange}
          loadOptions={loadOptions}
          className="header__search"
        />
      </div>
    </header>
  );
};
export default Search;
