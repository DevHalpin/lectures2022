require("dotenv").config();
const request = require("request");

const fetchMyIP = () => {
  request("https://api.ipify.org/?format=json", (error, response, body) => {
    if (error) {
      return console.log(error);
    }
    if (response.statusCode === 200) {
      return fetchCoordsByIP(body);
    }
    console.log(
      `Something went wrong!  Error Code ${response.statusCode} was returned!`
    );
  });
};

const fetchCoordsByIP = (body) => {
  const ip = JSON.parse(body).ip;
  const requestString = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.API_KEY}&ip=${ip}`;
  request(requestString, (error, response, body) => {
    if (error) {
      return console.log(error);
    }
    if (response.statusCode === 200) {
      const lat = JSON.parse(body).latitude;
      const long = JSON.parse(body).longitude;
      console.log(`Lat: ${lat} and Long: ${long}`);
    }
    console.log(
      `Something went wrong!  Error Code ${response.statusCode} was returned!`
    );
  });
};

fetchMyIP();
