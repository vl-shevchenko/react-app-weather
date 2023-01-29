import './todayAtmosphere.scss';

const TodayAtmosphere = ({ data }) => {
  // console.log(data);
  return (
    <div className="today-atmosphere">
      <div className="today-atmosphere__card-wrapper">
        <span className="today-atmosphere__name">Cloudiness</span>
        <span className="today-atmosphere__value clouds">{data.clouds.all}</span>
      </div>
      <div className="today-atmosphere__card-wrapper">
        <span className="today-atmosphere__name">Visibility</span>
        <span className="today-atmosphere__value visibility">{data.visibility}</span>
      </div>
      <div className="today-atmosphere__card-wrapper">
        <span className="today-atmosphere__name">Wind</span>
        <span className="today-atmosphere__value wind">{data.wind.speed}</span>
      </div>
      <div className="today-atmosphere__card-wrapper">
        <span className="today-atmosphere__name">Pressure</span>
        <span className="today-atmosphere__value pressure">{data.main.pressure}</span>
      </div>

      <div className="today-atmosphere__card-wrapper">
        <span className="today-atmosphere__name">Humidity</span>
        <span className="today-atmosphere__value humidity">{data.main.humidity}</span>
      </div>
    </div>
  );
};

export default TodayAtmosphere;
