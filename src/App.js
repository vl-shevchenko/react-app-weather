import { useState } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL, TW_API_URL, TodayHourlyWeatherOptions } from './api';
import CurrentWeather from './components/Current-weather/Current-weather';
import Search from './components/Search/Search';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [todayHourly, setTodayHourly] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(',');
    const [cityName] = searchData.label.split(',');

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const todayHourlyWeatherFetch = fetch(`${TW_API_URL}?q=${searchData.value}&days=3`, TodayHourlyWeatherOptions);

    Promise.all([currentWeatherFetch, forecastFetch, todayHourlyWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        const todayHourlyWeatherResponse = await response[2].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
        setTodayHourly({ city: searchData.label, ...todayHourlyWeatherResponse });
      })
      .catch((err) => console.log(err));
  };

  // console.log(currentWeather);
  // console.log(forecast);

  return (
    <div>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={[currentWeather, forecast, todayHourly]} />}
    </div>
  );
}

export default App;
