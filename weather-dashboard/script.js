// ---------------------------------------------
// API Key + Base URLs
// ---------------------------------------------
// My OpenWeather API key
const apiKey = "7ee36c6b983b4032432c855dd97f79f3";

// Base URL for current weather
const currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather";

// Base URL for 5-day / 3-hour forecast endpoint
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast";

// ---------------------------------------------
// Search Button Event
// ---------------------------------------------

// Get a reference to the search button by its ID and add a click event listener
document.getElementById("search-btn").addEventListener("click", () => {

  // Read the value from the search input, trim whitespace from both ends, and store it in the 'city' variable
  const city = document.getElementById("search-input").value.trim();

  // Only proceed if the user actually typed something
  if (city) {
    // Call the function to fetch current weather for the given city
    getWeather(city);
    // Call the function to fetch data for the given city
    getForecast(city);
  }
});

// ---------------------------------------------
// Fetch Current Weather
// ---------------------------------------------
function getWeather(city) {


