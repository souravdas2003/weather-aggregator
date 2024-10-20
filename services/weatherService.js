const axios = require('axios');
const config = require('../config/config');

async function getWeatherData(city) {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.openWeatherMapApiKey}`);
  return response.data;
}

module.exports = { getWeatherData };
