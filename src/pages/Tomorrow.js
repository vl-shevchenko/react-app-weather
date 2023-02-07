import TomorrowWeather from '../components/Tomorrov/TomorrowWeather';

function Tomorrow({ data }) {
  return <TomorrowWeather data={data[2]} />;
}

export default Tomorrow;
