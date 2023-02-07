import { Routes, Route, HashRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL, TW_API_URL, TodayHourlyWeatherOptions, REVERSE_API_URL } from './api';
import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search';
import Today from './pages/Today';
import Tomorrow from './pages/Tomorrow';
import Hourly from './pages/Hourly';
import ScrollToTop from './utils/scrollToTop';
import { InfinitySpin } from 'react-loader-spinner';
import './styles/index.scss';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [todayHourly, setTodayHourly] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cityGeo, setCityGeo] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      myGeo(latitude, longitude);
    });

    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 3000);
  }, []);

  const myGeo = (latitude, longitude) => {
    fetch(`${REVERSE_API_URL}/reverse?lat=${latitude}&lon=${longitude}&limit=1000&appid=${WEATHER_API_KEY}`)
      .then((response) => response.json())
      .then((response) => setCityGeo(response[0].name))
      .catch((err) => console.error(err));
    // const [city] = setCityGeo;
    // console.log(city);
    getWeather(latitude, longitude, '');
  };

  // .then(async (response) => {
  //   const cityResponse = await response.json();
  //   setCityGeo({ ...cityResponse });
  // })
  // .catch((err) => console.log(err));

  // };

  const getWeather = (lat, lon, city) => {
    setIsLoading(true);

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const todayHourlyWeatherFetch = fetch(`${TW_API_URL}?q=${lat},${lon}&days=3`, TodayHourlyWeatherOptions);

    Promise.all([currentWeatherFetch, forecastFetch, todayHourlyWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        const todayHourlyWeatherResponse = await response[2].json();

        setCurrentWeather({ city, ...weatherResponse });
        setForecast({ city, ...forecastResponse });
        setTodayHourly({ city, ...todayHourlyWeatherResponse });
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  };

  const handleOnSearchChange = (searchData) => {
    const [latitude, longitude] = searchData.value.split(',');
    const [city] = searchData.label.split(',');
    getWeather(latitude, longitude, city);
  };

  // console.log(currentWeather);
  // console.log(forecast);

  return (
    <div>
      {isLoading ? (
        <div className="spin">
          <InfinitySpin width="200" color="#448aff" />
        </div>
      ) : (
        <HashRouter>
          <ScrollToTop />
          <Search onSearchChange={handleOnSearchChange} />
          <NavBar />

          <Routes>
            <Route path="/" element={currentWeather && <Today data={[currentWeather, forecast, todayHourly]} />} />
            <Route
              path="/tomorrow"
              element={currentWeather && <Tomorrow data={[currentWeather, forecast, todayHourly]} />}
            />
            <Route
              path="/hourly"
              element={currentWeather && <Hourly data={[currentWeather, forecast, todayHourly]} />}
            />
          </Routes>
        </HashRouter>
      )}
    </div>
  );
}

export default App;
