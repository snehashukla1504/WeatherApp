# Weather App 🌤️

A simple weather app built with vanilla JavaScript that lets users search for any city 
and see current weather conditions, powered by the Open-Meteo API.

## Features
- Search weather by city name
- Converts city name to coordinates using Open-Meteo's geocoding API
- Fetches live forecast data using chained fetch() calls
- Displays temperature, weather conditions, and other relevant details
- Clean, responsive interface

## Tech Stack
- HTML5
- CSS3
- JavaScript (fetch API, async/await or Promise chaining)
- [Open-Meteo API](https://open-meteo.com/) (Geocoding + Forecast)

## How It Works
1. User enters a city name
2. App calls the Open-Meteo geocoding API to convert the city into latitude/longitude
3. App chains a second fetch() call to the forecast API using those coordinates
4. Weather data is rendered on the page

## Live Preview
https://fluffy-speculoos-f1bc56.netlify.app
