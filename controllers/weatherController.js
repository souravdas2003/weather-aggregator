const { Weather, DailySummary } = require('../models/weatherModel');
const weatherService = require('../services/weatherService');
const tempUtils = require('../utils/temperatureUtils');
const config = require('../config/config');

// Retrieve weather data for each city and store it in the database
async function updateWeatherData() {
  for (const city of config.cities) {
    try {
      const weatherData = await weatherService.getWeatherData(city);
      const temperature = tempUtils.kelvinToCelsius(weatherData.main.temp);
      const feelsLike = tempUtils.kelvinToCelsius(weatherData.main.feels_like);
      
      const newWeather = new Weather({
        city: weatherData.name,
        temperature,
        feels_like: feelsLike,
        main: weatherData.weather[0].main
      });

      await newWeather.save();
    } catch (error) {
      console.error(`Failed to update weather data for ${city}:`, error);
    }
  }
}

// Calculate daily weather summaries
async function calculateDailySummary() {
  for (const city of config.cities) {
    const weatherRecords = await Weather.find({
      city,
      timestamp: { $gte: new Date().setHours(0, 0, 0, 0) }
    });

    const temps = weatherRecords.map(record => record.temperature);
    const mainConditions = weatherRecords.map(record => record.main);

    const averageTemp = temps.reduce((a, b) => a + b, 0) / temps.length;
    const maxTemp = Math.max(...temps);
    const minTemp = Math.min(...temps);
    const dominantWeather = mainConditions.sort((a, b) =>
      mainConditions.filter(v => v === a).length - mainConditions.filter(v => v === b).length
    ).pop();

    const newSummary = new DailySummary({
      city,
      averageTemp,
      maxTemp,
      minTemp,
      dominantWeather
    });

    await newSummary.save();
  }
}

module.exports = { updateWeatherData, calculateDailySummary };
