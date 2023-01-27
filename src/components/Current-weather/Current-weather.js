import './current-weather.scss';
import moon from './ico/weatherIcon-2-25.svg';
import cloudy from './ico/WeatherIcon-2-39.svg';

const CurrentWeather = () => {
  return (
    <div className="current-weather">
      <div className="location__wrapper">
        <p className="location__city">Україна, Крим, Джанкойський район</p>
        <p className="location__title">Погода в Києві на сьогодні</p>
        <p className="location__city-local-time">Зараз в Києві 15:29 - 25 Січня, Середа</p>
      </div>
      <div className="current-weather__main-container">
        <div className="today-temperature">
          <div className="today-temperature__wrapper">
            <p className="today-temperature__temp">+7°</p>
            <img className="today-temperature__icon" alt="" src={cloudy} />
          </div>
          <div className="today-temperature__feels-like-wrapper">
            <p className="today-temperature__feels-like">-1</p>
            <p className="today-temperature__feels-like-span">Прохолодно</p>
          </div>
        </div>
        <div className="today-hourly-weather">
          <div className="today-hourly-weather__card-wrapper">
            <span className="today-hourly-weather__name">Вночі</span>
            <img className="today-hourly-weather__ico" src={moon} alt="" />
            <span className="today-hourly-weather__temp">+2</span>
            <span className="today-hourly-weather__feel">Прохолодно</span>
          </div>
          <div className="today-hourly-weather__card-wrapper">
            <span className="today-hourly-weather__name">Вранці</span>
            <img className="today-hourly-weather__ico" src={cloudy} alt="" />
            <span className="today-hourly-weather__temp">+2</span>
            <span className="today-hourly-weather__feel">Дуже Прохолодно</span>
          </div>
          <div className="today-hourly-weather__card-wrapper">
            <span className="today-hourly-weather__name">Вдень</span>
            <img className="today-hourly-weather__ico" src={cloudy} alt="" />
            <span className="today-hourly-weather__temp">+2</span>
            <span className="today-hourly-weather__feel">Прохолодно</span>
          </div>
          <div className="today-hourly-weather__card-wrapper">
            <span className="today-hourly-weather__name">Увечері</span>
            <img className="today-hourly-weather__ico" src={cloudy} alt="" />
            <span className="today-hourly-weather__temp">+2</span>
            <span className="today-hourly-weather__feel">Прохолодно</span>
          </div>
        </div>
      </div>
      <p className="current-weather__description">Мінлива хмарність, без опадів</p>
      <div className="today-atmosphere">
        <div className="today-atmosphere__card-wrapper">
          <span className="today-atmosphere__name">Імовірність опадів</span>
          <span className="today-atmosphere__value probability">0</span>
        </div>
        <div className="today-atmosphere__card-wrapper">
          <span className="today-atmosphere__name">Вітер</span>
          <span className="today-atmosphere__value wind">8</span>
        </div>
        <div className="today-atmosphere__card-wrapper">
          <span className="today-atmosphere__name">Тиск</span>
          <span className="today-atmosphere__value pressure">762</span>
        </div>
        <div className="today-atmosphere__card-wrapper">
          <span className="today-atmosphere__name">УФ-індекс</span>
          <span className="today-atmosphere__value uv-index">4/12</span>
        </div>
        <div className="today-atmosphere__card-wrapper">
          <span className="today-atmosphere__name">Вологість</span>
          <span className="today-atmosphere__value humidity">72</span>
        </div>
        <div className="today-atmosphere__card-wrapper">
          <span className="today-atmosphere__name">Опади</span>
          <span className="today-atmosphere__value precipitation">0</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
