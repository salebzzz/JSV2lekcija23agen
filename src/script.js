import { getUserLocation } from "./components/location";
import {
    getCurrentWeatherForLocation,
    getWeatherForUpcomingDays,
    getWeatherInFuture
} from "./components/weatherApi";
import { getGeolocationForCoords } from "./components/openWeatherApi";
import { getDateInFuture } from "./helpers/dateHelper";

let location = localStorage.getItem("location") || await getUserLocation();
updateLocation(location);


document.getElementById("changeLocation").addEventListener("click", async () => {
    const newLoc = await getUserLocation();
    updateLocation(newLoc);
});


document.getElementById("showWeatherForMyLocation").addEventListener("click", async () => {
    if (!navigator.geolocation) {
        return alert("Your browser does not support geolocation.");
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const geo = await getGeolocationForCoords(latitude, longitude);

        let city = geo.data[0].name;
        city = city.replace("Municipality", "").trim();

        updateLocation(city);
    });
});


const current = await getCurrentWeatherForLocation(location);
if (!current.data.current.is_day) {
    document.body.style.backgroundColor = "#383838";
}


const upcoming = await getWeatherForUpcomingDays(location);
for (let day of upcoming.data.forecast.forecastday) {
    console.log(`Na dan: ${day.date} max: ${day.day.maxtemp_c}, min: ${day.day.mintemp_c}`);
}


const date = getDateInFuture(30);
const future = await getWeatherInFuture(location, date);
console.log(future);


function updateLocation(newLocation) {
    location = newLocation;
    localStorage.setItem("location", newLocation);
}




