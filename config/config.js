require('dotenv').config();

module.exports = {
  openWeatherMapApiKey: process.env.OPEN_WEATHER_MAP_API_KEY,
  interval: 5 * 60 * 1000, // 5 minutes in milliseconds
  cities: ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'],
};
