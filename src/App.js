import { Routes, Route, HashRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL, TW_API_URL, TodayHourlyWeatherOptions, REVERSE_API_URL } from './api';
import NavBarLink from './components/NavBarLink/NavBarLink';
import Search from './components/Search/Search';
import Today from './pages/Today';
import Tomorrow from './pages/Tomorrow';
import Hourly from './pages/Hourly';
import ScrollToTop from './utils/scrollToTop';
import { InfinitySpin } from 'react-loader-spinner';
import './styles/index.scss';
import Footer from './components/Footer/Footer';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [todayHourly, setTodayHourly] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      fetch(`${REVERSE_API_URL}/reverse?lat=${latitude}&lon=${longitude}&limit=1000&appid=${WEATHER_API_KEY}`)
        .then((response) => response.json())
        .then((data) => getCity(data))
        .catch((err) => console.error(err));
      // const [city] = setCityGeo;
      // console.log(setCityGeo);
      function getCity(data) {
        const city = data[0].name;
        const latitude = data[0].lat;
        const longitude = data[0].lon;
        getWeather(latitude, longitude, city);
      }
    });

    setTimeout(() => {
      setIsLoading(false);
    }, 12000);
  }, []);

  // console.log(cityGeo);
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

    // const todayMapPrecipitation = fetch(
    //   `${MAP_WEATHER_API_URL}/precipitation_new/{2}/${lat}/${lon}.png?appid=${WEATHER_API_KEY}`
    // );

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
    <div className="wrapper">
      {isLoading ? (
        <div className="spin">
          <InfinitySpin width="200" color="#448aff" />
        </div>
      ) : (
        <HashRouter>
          <ScrollToTop />
          <Search onSearchChange={handleOnSearchChange} />
          <NavBarLink />
          <main className="main">
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
          </main>
          <Footer />
        </HashRouter>
      )}
    </div>
  );
}

export default App;
