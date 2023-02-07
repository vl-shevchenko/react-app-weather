import { GlobalSvgSelector } from '../../assets/ico/global/GlobalSvgSelector';
import './tomorrowHourly.scss';

const TomorrowHourly = ({ data }) => {
  // console.log(data);
  const hourlyWeatherTomorrow = data.forecast.forecastday[1].hour;

  return (
    <div className="hourly-weather">
      <div className="hourly-weather__card-wrapper">
        <span className="hourly-weather__name">Night</span>
        <div className="hourly-weather__ico">
          <GlobalSvgSelector id={hourlyWeatherTomorrow[3].condition.text} />
        </div>
        <span className="hourly-weather__temp">{Math.round(hourlyWeatherTomorrow[3].temp_c)}</span>
        <div className="hourly-weather__value-wrapper">
          <span className="hourly-weather__value feelslike-c">{Math.round(hourlyWeatherTomorrow[3].feelslike_c)}</span>
          <span className="hourly-weather__value chance-of-rain">{hourlyWeatherTomorrow[3].chance_of_rain}</span>
          <span className="hourly-weather__value chance-of-snow">{hourlyWeatherTomorrow[3].chance_of_snow}</span>
          <span className="hourly-weather__value precip-mm">{hourlyWeatherTomorrow[3].precip_mm}</span>
          <span className="hourly-weather__value wind-kph">{hourlyWeatherTomorrow[3].wind_kph}</span>
          <span className="hourly-weather__value windchill-c">{hourlyWeatherTomorrow[3].windchill_c}</span>
          <span className="hourly-weather__value humidity">{hourlyWeatherTomorrow[3].humidity}</span>
        </div>
      </div>
      <div className="hourly-weather__card-wrapper">
        <span className="hourly-weather__name">Morning</span>
        <div className="hourly-weather__ico">
          <GlobalSvgSelector id={hourlyWeatherTomorrow[7].condition.text} />
        </div>
        <span className="hourly-weather__temp">{Math.round(hourlyWeatherTomorrow[7].temp_c)}</span>
        <div className="hourly-weather__value-wrapper">
          <span className="hourly-weather__value feelslike-c">{Math.round(hourlyWeatherTomorrow[7].feelslike_c)}</span>
          <span className="hourly-weather__value chance-of-rain">{hourlyWeatherTomorrow[7].chance_of_rain}</span>
          <span className="hourly-weather__value chance-of-snow">{hourlyWeatherTomorrow[7].chance_of_snow}</span>
          <span className="hourly-weather__value precip-mm">{hourlyWeatherTomorrow[7].precip_mm}</span>
          <span className="hourly-weather__value wind-kph">{hourlyWeatherTomorrow[7].wind_kph}</span>
          <span className="hourly-weather__value windchill-c">{hourlyWeatherTomorrow[7].windchill_c}</span>
          <span className="hourly-weather__value humidity">{hourlyWeatherTomorrow[7].humidity}</span>
        </div>
      </div>
      <div className="hourly-weather__card-wrapper">
        <span className="hourly-weather__name">Day</span>
        <div className="hourly-weather__ico">
          <GlobalSvgSelector id={hourlyWeatherTomorrow[12].condition.text} />
        </div>
        <span className="hourly-weather__temp">{Math.round(hourlyWeatherTomorrow[12].temp_c)}</span>
        <div className="hourly-weather__value-wrapper">
          <span className="hourly-weather__value feelslike-c">{Math.round(hourlyWeatherTomorrow[12].feelslike_c)}</span>
          <span className="hourly-weather__value chance-of-rain">{hourlyWeatherTomorrow[12].chance_of_rain}</span>
          <span className="hourly-weather__value chance-of-snow">{hourlyWeatherTomorrow[12].chance_of_snow}</span>
          <span className="hourly-weather__value precip-mm">{hourlyWeatherTomorrow[12].precip_mm}</span>
          <span className="hourly-weather__value wind-kph">{hourlyWeatherTomorrow[12].wind_kph}</span>
          <span className="hourly-weather__value windchill-c">{hourlyWeatherTomorrow[12].windchill_c}</span>
          <span className="hourly-weather__value humidity">{hourlyWeatherTomorrow[12].humidity}</span>
        </div>
      </div>
      <div className="hourly-weather__card-wrapper">
        <span className="hourly-weather__name">Evening</span>
        <div className="hourly-weather__ico">
          <GlobalSvgSelector id={hourlyWeatherTomorrow[18].condition.text} />
        </div>
        <span className="hourly-weather__temp">{Math.round(hourlyWeatherTomorrow[18].temp_c)}</span>
        <div className="hourly-weather__value-wrapper">
          <span className="hourly-weather__value feelslike-c">{Math.round(hourlyWeatherTomorrow[18].feelslike_c)}</span>
          <span className="hourly-weather__value chance-of-rain">{hourlyWeatherTomorrow[18].chance_of_rain}</span>
          <span className="hourly-weather__value chance-of-snow">{hourlyWeatherTomorrow[18].chance_of_snow}</span>
          <span className="hourly-weather__value precip-mm">{hourlyWeatherTomorrow[18].precip_mm}</span>
          <span className="hourly-weather__value wind-kph">{hourlyWeatherTomorrow[18].wind_kph}</span>
          <span className="hourly-weather__value windchill-c">{hourlyWeatherTomorrow[18].windchill_c}</span>
          <span className="hourly-weather__value humidity">{hourlyWeatherTomorrow[18].humidity}</span>
        </div>
      </div>
    </div>
  );
};

export default TomorrowHourly;
