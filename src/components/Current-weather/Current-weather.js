import './current-weather.scss';
import moon from './ico/weatherIcon-2-25.svg';
import cloudy from './ico/WeatherIcon-2-39.svg';

const CurrentWeather = ({ data }) => {
  console.log(data);
  // const sunrise = new Date((data.sys.sunrise + data.timezone) * 1000);
  return (
    <div className="current-weather">
      <div className="location__wrapper">
        <p className="location__city">Ukraine, Chercasy Region, Chyhyryn Raion</p>
        <p className="location__title">{data.city} weather today</p>
        <p className="location__city-local-time">Currently in {data.city} 18:21 - 28 January, Saturday</p>
      </div>
      <div className="current-weather__main-container">
        <div className="today-temperature">
          <div className="today-temperature__wrapper">
            <p className="today-temperature__temp">{Math.round(data.main.temp)}°</p>
            <img className="today-temperature__icon" alt="" src={cloudy} />
          </div>
          <div className="today-temperature__feels-like-wrapper">
            <p className="today-temperature__feels-like">{Math.round(data.main.feels_like)}</p>
            <p className="today-temperature__feels-like-span">Cool</p>
          </div>
        </div>
        <div className="today-hourly-weather">
          <div className="today-hourly-weather__card-wrapper">
            <span className="today-hourly-weather__name">Night</span>
            <img className="today-hourly-weather__ico" src={moon} alt="" />
            <span className="today-hourly-weather__temp">+2</span>
            <span className="today-hourly-weather__feel">Cool</span>
          </div>
          <div className="today-hourly-weather__card-wrapper">
            <span className="today-hourly-weather__name">Morning</span>
            <img className="today-hourly-weather__ico" src={cloudy} alt="" />
            <span className="today-hourly-weather__temp">+2</span>
            <span className="today-hourly-weather__feel">Very cool</span>
          </div>
          <div className="today-hourly-weather__card-wrapper">
            <span className="today-hourly-weather__name">Day</span>
            <img className="today-hourly-weather__ico" src={cloudy} alt="" />
            <span className="today-hourly-weather__temp">+2</span>
            <span className="today-hourly-weather__feel">Cool</span>
          </div>
          <div className="today-hourly-weather__card-wrapper">
            <span className="today-hourly-weather__name">Evening</span>
            <img className="today-hourly-weather__ico" src={cloudy} alt="" />
            <span className="today-hourly-weather__temp">+2</span>
            <span className="today-hourly-weather__feel">Cool</span>
          </div>
        </div>
      </div>
      <p className="current-weather__description">{data.weather[0].description}</p>
      <div className="today-atmosphere">
        <div className="today-atmosphere__card-wrapper">
          <span className="today-atmosphere__name">Cloudiness</span>
          <span className="today-atmosphere__value clouds">{data.clouds.all}</span>
        </div>
        <div className="today-atmosphere__card-wrapper">
          <span className="today-atmosphere__name">Visibility</span>
          <span className="today-atmosphere__value visibility">{data.visibility}</span>
        </div>
        <div className="today-atmosphere__card-wrapper">
          <span className="today-atmosphere__name">Wind</span>
          <span className="today-atmosphere__value wind">{data.wind.speed}</span>
        </div>
        <div className="today-atmosphere__card-wrapper">
          <span className="today-atmosphere__name">Pressure</span>
          <span className="today-atmosphere__value pressure">{data.main.pressure}</span>
        </div>

        <div className="today-atmosphere__card-wrapper">
          <span className="today-atmosphere__name">Humidity</span>
          <span className="today-atmosphere__value humidity">{data.main.humidity}</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
