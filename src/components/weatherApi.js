import axios from "axios";


export async function getCurrentWeatherForLocation(location) {
    try {
        return await axios.get(process.env.API_URL + "/reverse", {
            params: {
                key: process.env.API_KEY,
                q: location,
                aqi: "no"
            }
        });
    } catch (exception) {
        return alert("Something went wrong with getting current weather for location. Try again");
    }
}


export async function getWeatherForUpcomingDays(location) {
    try {
        return await axios.get(`${process.env.API_URL}/${location}`, {
            params: {
                key: process.env.API_KEY,
                include: "days",
                unitGroup: "metric",
                elements: "datetime,tempmax,tempmin"
            }
        });
    } catch (exception) {
        alert("Something went wrong with getting weather for upcoming days. Try again");
    }
}


export async function getWeatherInFuture(location) {
    try {
        return await axios.get(`${process.env.API_URL}/${location}`, {
            params: {
                key: process.env.API_KEY,
                include: "days",
                unitGroup: "metric",
                elements: "datetime,tempmax,tempmin",
                aggregateHours: 24
            }
        });
    } catch (exception) {
        alert("Something went wrong with fetching data for weather in the future");
    }
}






