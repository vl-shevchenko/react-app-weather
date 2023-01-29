import LocationTitle from '../LocationTitle/LocationTitle.js';
import TodayAtmosphere from '../TodayAtmosphere/TodayAtmosphere.js';
import TodayHourlyWeather from '../TodayHourlyWeather/TodayHourlyWeather.js';
import TodayTemperature from '../TodayTemperature/TodayTemperature.js';
import './current-weather.scss';

const CurrentWeather = ({ data }) => {
  // console.log(data);

  return (
    <div className="current-weather">
      <LocationTitle data={data[0]} />
      <div className="current-weather__main-container">
        <TodayTemperature data={data[0]} />
        <TodayHourlyWeather data={data[1]} />
      </div>
      <p className="current-weather__description">{data[0].weather[0].description}</p>
      <TodayAtmosphere data={data[0]} />
    </div>
  );
};

export default CurrentWeather;
