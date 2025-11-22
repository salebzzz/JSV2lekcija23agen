import axios from "axios";

export async function getGeolocationForCoords(lat, lon) {
    return await axios.get(`${process.env.OPENWEATHER_BASE_URL}/1.0/reverse`, {
        params: {
            lat: lat,
            lon: lon,
            limit: 3,
            appid: process.env.OPENWEATHER_API_KEY
        }
    });
}
