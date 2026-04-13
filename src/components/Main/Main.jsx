import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import Weather from "../WeatherCard/WeatherCard";
import { getWeatherCondition } from "../../utils/weatherApi";
import Header from "../Header/Header";

function Main({ weather, clothingItems, onCardClick, onAddClick }) {
  // wait until weather loads
  if (!weather || weather.temp === undefined) {
    return (
      <main className="container">
        <p>Loading...</p>
      </main>
    );
  }

  const weatherType = getWeatherCondition(weather.temp);

  const filteredItems = clothingItems.filter((item) => {
    return item.weather === weatherType;
  });

  return (
    <main className="container">
      <Weather weather={weather} />

      <div className="main__items">
        {filteredItems.length === 0 ? (
          <p>No items for this weather</p>
        ) : (
          filteredItems.map((item) => (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          ))
        )}
      </div>
    </main>
  );
}

export default Main;
/* lines 11-15 says: Go through every clothing item and create an Itemcard for each one */
