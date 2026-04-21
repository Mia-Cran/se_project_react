import { APIkey, coordinates } from "./constants";

export function getWeatherCondition(temp) {
    if (temp >= 86) {
        return "hot";
    } else if (temp >= 66) {
      return "warm";
    } else {
      return "cold";
    }
}

export function getWeather() {
    const { latitude, longitude } = coordinates;

    return fetch(
     `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
    )
    
      .then((res) => res.json())
      .then((data) => {
        return {
            temp: {
              F: data.main.temp,
              C: Math.round((data.main.temp - 32) * 5 / 9),
            },
            city: data.name,
            condition: getWeatherCondition(data.main.temp),
        };
    });
}