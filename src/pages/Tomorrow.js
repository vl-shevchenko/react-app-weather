import TomorrowWeather from '../components/TomorrovWeather/TomorrowWeather';

function Tomorrow({ data }) {
  return <TomorrowWeather data={data[2]} />;
}

export default Tomorrow;
