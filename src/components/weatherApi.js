import axios from "axios";

const apiKey = "96491fa3e24948149a2191217251207";

export async function getCurrentWeatherForLocation(location) {
    return await axios.get("https://api.weatherapi.com/v1/current.json", {
        params: {
            key: apiKey,
            q: location,
            aqi: "no"
        }
    });
}

export async function getWeatherForUpcomingDays(location, days) {
    //http://api.weatherapi.com/v1/forecast.json?key=96491fa3e24948149a2191217251207&q=London&days=3&aqi=no&alerts=no
    return await axios.get("http://api.weatherapi.com/v1/forecast.json", {
        params: {
            key: apiKey,
            aqi: "no",
            alerts: "no",
            days: days,
            q: location,
        }
    });
}