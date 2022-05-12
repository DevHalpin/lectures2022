
require("dotenv").config();
const request = require('request-promise-native');

const displayLatAndLong = () => {
    fetchMyIP()
    .then((data) => fetchCoordsByIP(data))
    .then((coords) => {
        const lat = JSON.parse(coords).latitude
        const long = JSON.parse(coords).longitude
        console.log(`Lat: ${lat} and Long: ${long}`)
    })
    .catch(() => console.log(error))
}

const fetchCoordsByIP  = (body) => {
    const ip = JSON.parse(body).ip
    const requestString = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.API_KEY}&ip=${ip}`
    return request(requestString);

    
}

const fetchMyIP = () => {
    return request('https://api.ipify.org/?format=json');
}

displayLatAndLong();



