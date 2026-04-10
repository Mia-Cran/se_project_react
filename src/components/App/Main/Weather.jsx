
function WeatherCard({ weather }) {
  return (
    <div>
      <p>{weather?.name}</p>
      <p>{weather?.main?.temp}°F</p>
    </div>
  );
}

export default Weather;