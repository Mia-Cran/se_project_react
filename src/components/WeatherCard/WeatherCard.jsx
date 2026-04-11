import weatherImage from "../../assets/weather.png";
import tempImage from "../../../src/assets/degree.png";
import "./WeatherCard.css";

function Weather({ weather }) {
  return (
    
    <section className="weather__card" style={{ marginTop: "20px" }}> 
      <div className="weather__images">
        <img className="weather__card-img" src={weatherImage} alt="weather" /> 
       <p className="weather__card-temp">
         {weather?.temp !== undefined ? Math.round(weather.temp) : ""}°
       </p>
       </div>
         <p className="weather__card-info">
          Today is {weather?.temp !== undefined ? Math.round(weather.temp) : ""}°F / You may want to wear:</p>
    </section>
        
  );
}

export default Weather;