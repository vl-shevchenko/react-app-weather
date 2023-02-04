import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL, TW_API_URL, TodayHourlyWeatherOptions } from './api';
import NavBar from './components/navBar/NavBar';
// import CurrentWeather from './components/current-weather/Current-weather';
import Search from './components/search/Search';
import Today from './pages/Today';
import Tomorrow from './pages/Tomorrow';
import Hourly from './pages/Hourly';
import ScrollToTop from './utils/scrollToTop';
// import TomorrowWeather from './components/tomorrov/TomorrowWeather';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [todayHourly, setTodayHourly] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(',');

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
      <Router>
        <ScrollToTop />
        <Search onSearchChange={handleOnSearchChange} />
        <NavBar />
        <Routes>
          <Route path="/" element={currentWeather && <Today data={[currentWeather, forecast, todayHourly]} />} />
          <Route
            path="/tomorrow"
            element={currentWeather && <Tomorrow data={[currentWeather, forecast, todayHourly]} />}
          />
          <Route path="/hourly" element={currentWeather && <Hourly data={[currentWeather, forecast, todayHourly]} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
