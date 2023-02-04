import { GlobalSvgSelector } from '../../assets/ico/global/GlobalSvgSelector';
import './tomorrowTemperatureDay.scss';

const TomorrowTemperatureDay = ({ data }) => {
  // console.log(data);

  return (
    <div className="tomorrow-temperature-day__current-temp">
      <div className="tomorrow-temperature-day__wrapper-temp-ico">
        <p className="tomorrow-temperature-day__temp">{Math.round(data.current.temp_c)}°</p>
        <div className="tomorrow-temperature-day__icon">
          <GlobalSvgSelector id={data.current.condition.text} />
        </div>
      </div>
      <p className="tomorrow-temperature-day__feels-like">{Math.round(data.current.feelslike_c)}</p>
      <p className="tomorrow-temperature-day__description">{data.current.condition.text}</p>
    </div>
  );
};

export default TomorrowTemperatureDay;
