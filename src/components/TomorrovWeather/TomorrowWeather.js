import TomorrowAstronomy from '../TomorrowAstronomy/TomorrowAstronomy';
import TomorrowHourly from '../TomorrowHourly/TomorrowHourly';
import TomorrowTemperature from '../TomorrowTemperature/TomorrowTemperature';
import './tomorrowWeather.scss';

const TomorrowWeather = ({ data }) => {
  console.log(data);

  var myDate = new Date(data.location.localtime_epoch * 1000);

  let [weekday, day, month, , ,] = myDate.toUTCString().split(' ');
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
            <TomorrowTemperature data={data} />

            <TomorrowAstronomy data={data} />
          </div>
        </div>

        <TomorrowHourly data={data} />
      </div>
    </div>
  );
};

export default TomorrowWeather;
