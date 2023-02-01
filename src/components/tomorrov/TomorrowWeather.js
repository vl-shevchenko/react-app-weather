import './tommorowWeather.scss';

const TomorrowWeather = ({ data }) => {
  console.log(data);
  var myDate = new Date(data.location.localtime_epoch * 1000);

  let [weekday, day, month, , time] = myDate.toUTCString().split(' ');
  const dateToday = `${weekday} ${day} ${month}`;
  const [hours, minutes] = time.split(':');

  const [city] = data.city.split(',');

  return (
    <div className="tomorrow-temperature">
      <div className="tomorrow-location__wrapper">
        <p className="tomorrow-location__title">Weather in {city} tomorrow</p>
        <p className="tomorrow-location__city-local-time">
          Tomorrow in {city} {dateToday}
        </p>
      </div>

      <div className="tomorrow-temperature__astro-temp-wrapper">
        <div className="tomorrow-temperature">
          <div className="tomorrow-temperature__wrapper">
            <p className="tomorrow-temperature__temp">{Math.round(data.current.temp_c)}°</p>
            <div className="tomorrow-temperature__icon">
              <GlobalSvgSelector id={data.current.condition.text} />
            </div>
          </div>
          <p className="tomorrow-temperature__feels-like">{Math.round(data.current.feelslike_c)}</p>
          <p className="tomorrow-temperature__description">{data[2].current.condition.text}</p>
        </div>

        <div className="astro">
          <div className="astro__wrapper">
            <div className="astro__wrapper-card astro__sunrise">
              <span className="astro__title">Sunrise</span>
              <span className="astro__value">{astro.sunrise}</span>
            </div>
            <div className="astro__wrapper-card astro__sunset">
              <span className="astro__title">Sunset</span>
              <span className="astro__value">{astro.sunset}</span>
            </div>
          </div>
          <div className="astro__wrapper-card astro__day-lenth">
            <span className="astro__title">Day length</span>
            <span className="astro__value">{`${astro.sunset}` - `${astro.sunrise}`}</span>
          </div>
          <div className="astro__wrapper-card astro__moon">
            <span className="astro__title">Moon Phase</span>
            <span className="astro__value">{astro.moon_phase}</span>
          </div>
        </div>
      </div>

      <div className="tomorrow-hourly-weather">
        <div className="tomorrow-hourly-weather__card-wrapper">
          <span className="tomorrow-hourly-weather__name">Night</span>
          <div className="tomorrow-hourly-weather__ico">
            <GlobalSvgSelector id={hour[3].condition.text} />
          </div>
          <span className="tomorrow-hourly-weather__temp">{Math.round(hour[3].temp_c)}</span>
          <span className="tomorrow-hourly-weather__value feelslike-c">{Math.round(hour[3].feelslike_c)}°</span>
          <span className="tomorrow-hourly-weather__value chance-of-rain">{hour[3].chance_of_rain}%</span>
          <span className="tomorrow-hourly-weather__value chance-of-snow">{hour[3].chance_of_snow}%</span>
          <span className="tomorrow-hourly-weather__value precip-mm">{hour[3].precip_mm}mm</span>
          <span className="tomorrow-hourly-weather__value wind-kph">{hour[3].wind_kph}kph</span>
          <span className="tomorrow-hourly-weather__value windchill-c">{hour[3].windchill_c}°</span>
          <span className="tomorrow-hourly-weather__value humidity">{hour[3].humidity}%</span>
        </div>
        <div className="tomorrow-hourly-weather__card-wrapper">
          <span className="tomorrow-hourly-weather__name">Morning</span>
          <div className="tomorrow-hourly-weather__ico">
            <GlobalSvgSelector id={hour[7].condition.text} />
          </div>
          <span className="tomorrow-hourly-weather__temp">{Math.round(hour[7].temp_c)}</span>
          <span className="tomorrow-hourly-weather__value feelslike-c">{Math.round(hour[7].feelslike_c)}°</span>
          <span className="tomorrow-hourly-weather__value chance-of-rain">{hour[7].chance_of_rain}%</span>
          <span className="tomorrow-hourly-weather__value chance-of-snow">{hour[7].chance_of_snow}%</span>
          <span className="tomorrow-hourly-weather__value precip-mm">{hour[7].precip_mm}mm</span>
          <span className="tomorrow-hourly-weather__value wind-kph">{hour[7].wind_kph}kph</span>
          <span className="tomorrow-hourly-weather__value windchill-c">{hour[7].windchill_c}°</span>
          <span className="tomorrow-hourly-weather__value humidity">{hour[7].humidity}%</span>
        </div>
        <div className="tomorrow-hourly-weather__card-wrapper">
          <span className="tomorrow-hourly-weather__name">Day</span>
          <div className="tomorrow-hourly-weather__ico">
            <GlobalSvgSelector id={hour[12].condition.text} />
          </div>
          <span className="tomorrow-hourly-weather__temp">{Math.round(hour[12].temp_c)}</span>
          <span className="tomorrow-hourly-weather__value feelslike-c">{Math.round(hour[12].feelslike_c)}°</span>
          <span className="tomorrow-hourly-weather__value chance-of-rain">{hour[12].chance_of_rain}%</span>
          <span className="tomorrow-hourly-weather__value chance-of-snow">{hour[12].chance_of_snow}%</span>
          <span className="tomorrow-hourly-weather__value precip-mm">{hour[12].precip_mm}mm</span>
          <span className="tomorrow-hourly-weather__value wind-kph">{hour[12].wind_kph}kph</span>
          <span className="tomorrow-hourly-weather__value windchill-c">{hour[12].windchill_c}°</span>
          <span className="tomorrow-hourly-weather__value humidity">{hour[12].humidity}%</span>
        </div>
        <div className="tomorrow-hourly-weather__card-wrapper">
          <span className="tomorrow-hourly-weather__name">Evening</span>
          <div className="tomorrow-hourly-weather__ico">
            <GlobalSvgSelector id={hour[18].condition.text} />
          </div>
          <span className="tomorrow-hourly-weather__temp">{Math.round(hour[18].temp_c)}</span>
          <span className="tomorrow-hourly-weather__value feelslike-c">{Math.round(hour[18].feelslike_c)}°</span>
          <span className="tomorrow-hourly-weather__value chance-of-rain">{hour[18].chance_of_rain}%</span>
          <span className="tomorrow-hourly-weather__value chance-of-snow">{hour[18].chance_of_snow}%</span>
          <span className="tomorrow-hourly-weather__value precip-mm">{hour[18].precip_mm}mm</span>
          <span className="tomorrow-hourly-weather__value wind-kph">{hour[18].wind_kph}kph</span>
          <span className="tomorrow-hourly-weather__value windchill-c">{hour[18].windchill_c}°</span>
          <span className="tomorrow-hourly-weather__value humidity">{hour[18].humidity}%</span>
        </div>
      </div>
    </div>
  );
};

export default TomorrowWeather;
