
export function getUserLocation() {

    let userLocation = "";

    while(userLocation.trim() ===  "") {
        userLocation = prompt("Unestite vas grad");
    }

    return userLocation
}