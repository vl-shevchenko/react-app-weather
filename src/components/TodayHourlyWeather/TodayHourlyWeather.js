import './todayHourlyWeather.scss';
import cloudy from './../Current-weather/ico/WeatherIcon-2-39.svg';
import moon from './../Current-weather/ico/weatherIcon-2-25.svg';

const TodayHourlyWeather = ({ data }) => {
  const hourlyWeather = data.forecast.forecastday[0].hour;
  // console.log(hourlyWeather);

  return (
    <div className="today-hourly-weather">
      <div className="today-hourly-weather__card-wrapper">
        <span className="today-hourly-weather__name">Night</span>
        <img className="today-hourly-weather__ico" src={moon} alt="" />
        <span className="today-hourly-weather__temp">{Math.round(hourlyWeather[3].temp_c)}</span>
        <span className="today-hourly-weather__feel">Cool</span>
      </div>
      <div className="today-hourly-weather__card-wrapper">
        <span className="today-hourly-weather__name">Morning</span>
        <img className="today-hourly-weather__ico" src={cloudy} alt="" />
        <span className="today-hourly-weather__temp">{Math.round(hourlyWeather[7].temp_c)}</span>
        <span className="today-hourly-weather__feel">Very cool</span>
      </div>
      <div className="today-hourly-weather__card-wrapper">
        <span className="today-hourly-weather__name">Day</span>
        <img className="today-hourly-weather__ico" src={cloudy} alt="" />
        <span className="today-hourly-weather__temp">{Math.round(hourlyWeather[12].temp_c)}</span>
        <span className="today-hourly-weather__feel">Cool</span>
      </div>
      <div className="today-hourly-weather__card-wrapper">
        <span className="today-hourly-weather__name">Evening</span>
        <img className="today-hourly-weather__ico" src={cloudy} alt="" />
        <span className="today-hourly-weather__temp">{Math.round(hourlyWeather[18].temp_c)}</span>
        <span className="today-hourly-weather__feel">Cool</span>
      </div>
    </div>
  );
};

export default TodayHourlyWeather;
