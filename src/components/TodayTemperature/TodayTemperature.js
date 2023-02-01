import './todayTemperature.scss';
import { GlobalSvgSelector } from '../../assets/ico/global/GlobalSvgSelector';

const TodayTemperature = ({ data }) => {
  console.log(data);

  return (
    <div className="today-temperature">
      <div className="today-temperature__wrapper">
        <p className="today-temperature__temp">{Math.round(data.current.temp_c)}°</p>
        <div className="today-temperature__icon">
          <GlobalSvgSelector id={data.current.condition.text} />
        </div>
      </div>
      <div className="today-temperature__feels-like-wrapper">
        <p className="today-temperature__feels-like">{Math.round(data.current.feelslike_c)}</p>
        <p className="today-temperature__feels-like-span">Cool</p>
      </div>
    </div>
  );
};

export default TodayTemperature;
