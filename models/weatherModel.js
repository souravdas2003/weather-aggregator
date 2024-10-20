const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  city: String,
  temperature: Number,
  feels_like: Number,
  main: String,
  timestamp: { type: Date, default: Date.now }
});

const dailySummarySchema = new mongoose.Schema({
  city: String,
  averageTemp: Number,
  maxTemp: Number,
  minTemp: Number,
  dominantWeather: String,
  date: { type: Date, default: Date.now }
});

const Weather = mongoose.model('Weather', weatherSchema);
const DailySummary = mongoose.model('DailySummary', dailySummarySchema);

module.exports = { Weather, DailySummary };