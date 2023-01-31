import './locationTitle.scss';

const LocationTitle = ({ data }) => {
  // console.log(data);

  var myDate = new Date(data.dt * 1000);

  let [weekday, day, month, , time] = myDate.toUTCString().split(' ');
  const dateToday = `${weekday} ${day} ${month}`;
  const [hours, minutes] = time.split(':');

  const [city] = data.city.split(',');
  return (
    <div className="location__wrapper">
      <p className="location__title">{city} weather today</p>
      <p className="location__city-local-time">
        Currently in {city} {`${hours}:${minutes}`} - {dateToday}
      </p>
    </div>
  );
};

export default LocationTitle;
