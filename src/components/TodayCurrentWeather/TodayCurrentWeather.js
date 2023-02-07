import LocationTitle from '../LocationTitle/LocationTitle.js';
import TodayAtmosphere from '../TodayAtmosphere/TodayAtmosphere.js';
import TodayHourlyWeather from '../TodayHourlyWeather/TodayHourlyWeather.js';
import TodayTemperature from '../TodayTemperature/TodayTemperature.js';
import './todayCurrentWeather.scss';

const TodayCurrentWeather = ({ data }) => {
  console.log(data);

  return (
    <>
      <div className="current-weather">
        <LocationTitle data={data[0]} />
        <div className="current-weather__main-container">
          <TodayTemperature data={data[2]} />
          <TodayHourlyWeather data={data[2]} />
        </div>
        <p className="current-weather__description">{data[2].current.condition.text}</p>
        <TodayAtmosphere data={data[0]} />
      </div>
    </>
  );
};

export default TodayCurrentWeather;
