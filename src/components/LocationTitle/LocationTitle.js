import './locationTitle.scss';

const LocationTitle = ({ data }) => {
  // console.log(data);

  let date = new Date(data.dt * 1000);
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let options = { weekday: 'long', day: 'numeric', month: 'long' };
  let dateToday = date.toLocaleDateString('en-US', options);

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
