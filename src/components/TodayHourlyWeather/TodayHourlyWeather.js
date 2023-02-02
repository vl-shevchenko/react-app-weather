import './todayHourlyWeather.scss';
import { GlobalSvgSelector } from '../../assets/ico/global/GlobalSvgSelector';

const TodayHourlyWeather = ({ data }) => {
  const hourlyWeather = data.forecast.forecastday[0].hour;
  // console.log(hourlyWeather);

  return (
    <div className="today-hourly-weather">
      <div className="today-hourly-weather__card-wrapper">
        <span className="today-hourly-weather__name">Night</span>
        <div className="today-hourly-weather__ico">
          <GlobalSvgSelector id={hourlyWeather[3].condition.text} />
        </div>
        <span className="today-hourly-weather__temp">{Math.round(hourlyWeather[3].temp_c)}</span>
        <span className="today-hourly-weather__feel">Cool</span>
      </div>
      <div className="today-hourly-weather__card-wrapper">
        <span className="today-hourly-weather__name">Morning</span>
        <div className="today-hourly-weather__ico">
          <GlobalSvgSelector id={hourlyWeather[7].condition.text} />
        </div>
        <span className="today-hourly-weather__temp">{Math.round(hourlyWeather[7].temp_c)}</span>
        <span className="today-hourly-weather__feel">Very cool</span>
      </div>
      <div className="today-hourly-weather__card-wrapper">
        <span className="today-hourly-weather__name">Day</span>
        <div className="today-hourly-weather__ico">
          <GlobalSvgSelector id={hourlyWeather[12].condition.text} />
        </div>
        <span className="today-hourly-weather__temp">{Math.round(hourlyWeather[12].temp_c)}</span>
        <span className="today-hourly-weather__feel">Cool</span>
      </div>
      <div className="today-hourly-weather__card-wrapper">
        <span className="today-hourly-weather__name">Evening</span>
        <div className="today-hourly-weather__ico">
          <GlobalSvgSelector id={hourlyWeather[18].condition.text} />
        </div>
        <span className="today-hourly-weather__temp">{Math.round(hourlyWeather[18].temp_c)}</span>
        <span className="today-hourly-weather__feel">Cool</span>
      </div>
    </div>
  );
};

export default TodayHourlyWeather;
