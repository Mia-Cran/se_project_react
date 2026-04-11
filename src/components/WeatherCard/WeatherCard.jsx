import weatherImage from "../../assets/weather.png";
import tempImage from "../../../src/assets/degree.png";
import "./WeatherCard.css";

function Weather({ weather }) {
  return (
    <section className="weather__card" style={{ marginTop: "20px" }}>  
       <img className="weather__card-img" src={weatherImage} alt="weather" /> 
        <img className="weather__card-temp-img" src={tempImage} alt="75 degrees"/>
       <p className="weather__card-info">
          Today is {weather?.temp?.F}°F / You may want to wear:</p>
    </section>
  );
}

export default Weather;