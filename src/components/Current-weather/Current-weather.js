import LocationTitle from '../locationTitle/LocationTitle.js';
import TodayAtmosphere from '../todayAtmosphere/TodayAtmosphere.js';
import TodayHourlyWeather from '../todayHourlyWeather/TodayHourlyWeather.js';
import TodayTemperature from '../todayTemperature/TodayTemperature.js';
import TomorrowWeather from '../tomorrov/TomorrowWeather.js';
import './current-weather.scss';

const CurrentWeather = ({ data }) => {
  // console.log(data);

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

export default CurrentWeather;
