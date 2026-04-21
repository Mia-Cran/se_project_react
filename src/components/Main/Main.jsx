import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import { getWeatherCondition } from "../../utils/weatherApi";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";



function Main({ weather, clothingItems, onCardClick, onAddClick }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  // wait until weather loads
  if (!weather || weather.temperature) {
    return (
      <main className="container">
        <p>Loading...</p>
      </main>
    );
  }

  const weatherType = getWeatherCondition(weather.temp.F);

  const filteredItems = clothingItems.filter((item) => {
    return item.weather === weatherType;
  });

  return (
    <main className="container">
      <WeatherCard weather={weather} />

      <ul className="main__items">
        {filteredItems.length === 0 ? (
          <p>No items for this weather</p>
        ) : (
          filteredItems.map((item) => (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          ))
        )}
      </ul>
    </main>
  );
}

export default Main;
/* lines 11-15 says: Go through every clothing item and create an Itemcard for each one */
