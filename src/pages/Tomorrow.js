import TomorrowWeather from '../components/tomorrov/TomorrowWeather';

function Tomorrow({ data }) {
  return <TomorrowWeather data={data[2]} />;
}

export default Tomorrow;
