const express = require('express');
const mongoose = require('mongoose');
const weatherRoutes = require('./routes/weatherRoutes');
const config = require('./config/config');
require('dotenv').config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/weather', weatherRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Set up periodic weather data fetching
setInterval(async () => {
  await weatherController.updateWeatherData();
  await weatherController.calculateDailySummary();
}, config.interval);
