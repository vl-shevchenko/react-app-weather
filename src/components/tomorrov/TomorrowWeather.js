import TomorrowAstro from '../tomorrowAstro/TomorrowAstro';
import TomorrowHourlyWeather from '../tomorrowHourlyWeather/TomorrowHourlyWeather';
import TomorrowTemperatureDay from '../tomorrowTemperatureDay/TomorrowTemperatureDay';
import './tomorrowWeather.scss';

const TomorrowWeather = ({ data }) => {
  console.log(data);

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
          <div className="tomorrow-temperature__astro-temp-wrapper">
            <p className="tomorrow-location__city-local-time">
              Tomorrow in {city} {dateToday}
            </p>
            <TomorrowTemperatureDay data={data} />

            <TomorrowAstro data={data} />
          </div>
        </div>

        <TomorrowHourlyWeather data={data} />
      </div>
    </div>
  );
};

export default TomorrowWeather;
