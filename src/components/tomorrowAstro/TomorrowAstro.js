import './tomorrowAstro.scss';

const TomorrowAstro = ({ data }) => {
  // console.log(data);

  return (
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
  );
};

export default TomorrowAstro;
