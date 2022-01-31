const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=fe7525cb58077d1151f33f61b2576dc5&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    const temp = body.current.temperature;
    const feels = body.current.feelslike;
    const weatherDesc = body.current.weather_descriptions[0];
    const humidity = body.current.humidity;
    if (error) {
      callback("Unable to connect to weather service");
    } else if (body.error) {
      callback("Unable to find location");
    } else {
      callback(
        undefined,
        `${weatherDesc}. It is currently ${temp} degress out. It feels like ${feels} degress out. The humidity is ${humidity}%`
      );
    }
  });
};

module.exports = forecast;
