# Weather Monitoring System

A real-time weather monitoring system using Node.js and MongoDB. The system retrieves weather data from the OpenWeatherMap API, processes it for specific cities, and provides daily summaries and alerts.

## Features
- **Real-time Weather Data**: Fetches weather data every 5 minutes for major metros in India.
- **Daily Summaries**: Calculates average, max, min temperatures, and the dominant weather condition for the day.
- **Alerts**: Triggers alerts if user-defined thresholds (e.g., temperature exceeds a certain value) are breached.
- **Visual Dashboard**: Displays weather summaries and alerts on a web-based dashboard.

## Setup and Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [MongoDB](https://www.mongodb.com/) (You can use a local or cloud-based instance)

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd weather-monitoring-system
2. Install Dependencies
Run the following command to install all required dependencies:

bash

npm install
3. Configure Environment Variables
Create a .env file in the root of the project and add the following:

bash

OPEN_WEATHER_MAP_API_KEY=your_openweathermap_api_key
MONGO_URI=mongodb://localhost:27017/weather-db
OPEN_WEATHER_MAP_API_KEY: You can get this from OpenWeatherMap by signing up for a free account.
MONGO_URI: You can either set up a local MongoDB server or use a cloud service like MongoDB Atlas.
4. Start the Application
Run the following command to start the server:

bash

npm start
The application will be accessible at http://localhost:3000.

5. Testing the System
Endpoints:
GET /weather/update: Fetches new weather data from the OpenWeatherMap API for all configured cities and saves it to the database.
GET /weather/summary: Calculates and stores daily weather summaries for each city.
Example Requests:
bash

curl http://localhost:3000/weather/update
curl http://localhost:3000/weather/summary
Test Cases:
System Setup: Ensure the system connects to MongoDB and retrieves data from OpenWeatherMap.
Temperature Conversion: Check that temperatures are converted from Kelvin to Celsius/Fahrenheit based on configuration.
Daily Summary Calculation: Verify the correct calculation of average, max, and min temperatures, and the dominant weather condition.
6. Alerts
Alerts are configured to trigger if the temperature exceeds user-defined thresholds.
You can extend the system to send email alerts or display notifications.
Technologies Used
Node.js: Server-side JavaScript runtime.
Express: Web framework for Node.js.
MongoDB: NoSQL database for storing weather data and summaries.
Axios: HTTP client for making API requests.
OpenWeatherMap API: Source for weather data.
License
This project is licensed under the MIT License.

sql


### 6. Exclude Sensitive Files from Git

Make sure your sensitive files such as `.env` and `node_modules` are excluded from being tracked in the repository:

```bash
git rm -r --cached node_modules
git rm --cached .env
Now, both node_modules and .env will be ignored by Git, and they won't be pushed to GitHub.

7. Pushing Changes
Whenever you make changes to the code, you can push them using the following commands:

bash

git add .
git commit -m "Your commit message"
git push
