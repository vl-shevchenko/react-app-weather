import './todayTemperature.scss';
import cloudy from './../Current-weather/ico/WeatherIcon-2-39.svg';

const TodayTemperature = ({ data }) => {
  // console.log(data);

  return (
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
  );
};

export default TodayTemperature;
