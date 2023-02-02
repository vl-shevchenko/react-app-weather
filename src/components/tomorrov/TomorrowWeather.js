import { GlobalSvgSelector } from '../../assets/ico/global/GlobalSvgSelector';
import './tomorrowWeather.scss';

const TomorrowWeather = ({ data }) => {
  console.log(data);
  console.log(data.forecast.forecastday[1].astro.moon_phase);

  const hourlyWeatherTomorrow = data.forecast.forecastday[1].hour;
  var myDate = new Date(data.location.localtime_epoch * 1000);

  let [weekday, day, month, , time] = myDate.toUTCString().split(' ');
  const dateToday = `${weekday} ${day} ${month}`;
  // const [hours, minutes] = time.split(':');

  const [city] = data.city.split(',');

  return (
    <div className="tomorrow-temperature">
      <div className="tomorrow-location__wrapper">
        <p className="tomorrow-location__title">Weather in {city} tomorrow</p>
      </div>
      <div className="tomorrow-temperature__wrapper-main">
        <div className="tomorrow-temperature__current-wrapper">
          <div className="tomorrow-temperature-day__astro-temp-wrapper">
            <p className="tomorrow-location__city-local-time">
              Tomorrow in {city} {dateToday}
            </p>
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

            <div className="astro">
              <div className="astro__wrapper">
                <div className="astro__wrapper-card astro__sunrise">
                  <span className="astro__title">Sunrise</span>
                  <span className="astro__value">{data.forecast.forecastday[1].astro.sunrise}</span>
                </div>
                <div className="astro__wrapper-card astro__sunset">
                  <span className="astro__title">Sunset</span>
                  <span className="astro__value">{data.forecast.forecastday[1].astro.sunset}</span>
                </div>
              </div>
              <div className="astro__wrapper-card astro__day-lenth">
                <span className="astro__title">Day length</span>
                {/* <span className="astro__value">{`${astro.sunset}` - `${astro.sunrise}`}</span> */}
              </div>
              <div className="astro__wrapper-card astro__moon">
                <span className="astro__title">Moon Phase</span>
                <span className="astro__value">{data.forecast.forecastday[1].astro.moon_phase}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hourly-weather">
          <div className="hourly-weather__card-wrapper">
            <span className="hourly-weather__name">Night</span>
            <div className="hourly-weather__ico">
              <GlobalSvgSelector id={hourlyWeatherTomorrow[3].condition.text} />
            </div>
            <span className="hourly-weather__temp">{Math.round(hourlyWeatherTomorrow[3].temp_c)}</span>
            <div className="hourly-weather__value-wrapper">
              <span className="hourly-weather__value feelslike-c">
                {Math.round(hourlyWeatherTomorrow[3].feelslike_c)}
              </span>
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
              <span className="hourly-weather__value feelslike-c">
                {Math.round(hourlyWeatherTomorrow[7].feelslike_c)}
              </span>
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
              <span className="hourly-weather__value feelslike-c">
                {Math.round(hourlyWeatherTomorrow[12].feelslike_c)}
              </span>
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
              <span className="hourly-weather__value feelslike-c">
                {Math.round(hourlyWeatherTomorrow[18].feelslike_c)}
              </span>
              <span className="hourly-weather__value chance-of-rain">{hourlyWeatherTomorrow[18].chance_of_rain}</span>
              <span className="hourly-weather__value chance-of-snow">{hourlyWeatherTomorrow[18].chance_of_snow}</span>
              <span className="hourly-weather__value precip-mm">{hourlyWeatherTomorrow[18].precip_mm}</span>
              <span className="hourly-weather__value wind-kph">{hourlyWeatherTomorrow[18].wind_kph}</span>
              <span className="hourly-weather__value windchill-c">{hourlyWeatherTomorrow[18].windchill_c}</span>
              <span className="hourly-weather__value humidity">{hourlyWeatherTomorrow[18].humidity}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TomorrowWeather;
