// ---------------------------------------------
// API Key + Base URLs
// ---------------------------------------------
// My OpenWeather API key
const apiKey = "7ee36c6b983b4032432c855dd97f79f3";

// Base URL for current weather
const currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather";

// Base URL for 5-day / 3-hour forecast endpoint
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast";

// --- DOM ELEMENTS ---

const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const searchMessage = document.getElementById("search-message");
const currentEmpty = document.getElementById("current-empty");
const forecastEmpty = document.getElementById("forecast-empty");

const historyList = document.getElementById("history-list");
const forecastCards = document.getElementById("forecast-cards");

// ===============================
// EVENT LISTENERS
// ===============================

// Handle search form submission
document.getElementById("search-form").addEventListener("submit", function (event) {
  event.preventDefault(); // stop page reload

  // Search logic >
  const city = cityInput.value.trim();
  console.log("City entered:", city);

  // 1. Validate input
  if (city === "") {
    searchMessage.textContent = "Please enter a city name.";
    searchMessage.style.color = "red";
    return;
  }

  // 2. Show loading message
  searchMessage.textContent = "Loading weather data...";
  searchMessage.style.color = "black";

  // 3. Fetch current weather
  getCurrentWeather(city);
});

// ===============================
// MAIN FUNCTIONS
// ===============================

// Fetch current weather
function getCurrentWeather(city) {
  console.log("Fetching current weather for:", city);
  // API call here >
  // Build the full API request URL by combining:
  // - the base current weather endpoint
  // - the city the user typed (q=city)
  // - my personal API key from above (appid=apiKey)
  // - units=metric to get Celsius instead of Fahrenheit

  const url = `${currentWeatherURL}?q=${city}&appid=${apiKey}&units=metric`;

  // Send a request to the OpenWeather API using the URL above
  fetch(url)
    // Handle the response from the OpenWeather server
    .then((response) => {
      // response.ok is true when the server returns a successful status (200–299).
      // The !response.ok is true when the response failed.
      // Example: 404 Not Found → response.ok = false → !response.ok = true
      // if response.ok will be false. We manually throw an error here.
      // so the code jumps to the .catch() block below
      if (!response.ok) {
        throw new Error("City not found");
      }
      // If the response is OK, convert the raw response into JSON.
      return response.json();
    })
    // This .then() receives the parsed JSON data from above
    .then((data) => {
      console.log("Current weather data:", data);
      // Clear any previous message (loading, error, etc.)

      searchMessage.textContent = "";
      // Pass the weather data to your UI function to display it on the page
      displayCurrentWeather(data);
      // Save the searched city to history (localStorage)
      saveHistory(city);
    })
    // This .catch() runs if ANY error happens above:
    // - network error
    // - invalid city
    // - JSON parsing error
    .catch((error) => {
      console.error("Error fetching weather:", error);
      // Show a user‑friendly error message on the page when something goes wrong
      searchMessage.textContent = "City not found. Try again.";
      searchMessage.style.color = "red";
    });
}

// Fetch 5-day forecast
function getForecast(city) {
  console.log("Fetching forecast for:", city);
  // TODO: Add API call here
}

// Render and displays the current weather data to the UI/web page
function displayCurrentWeather(data) {
  console.log("Displaying current weather:", data);
  // Extract the values we need from the API response
  // Extract the city name returned by the API
  const cityName = data.name;
  // Extract the current temperature in Celsius
  const temperature = data.main.temp;
  // Extract the weather description (e.g., "clear sky")
  // The API returns "weather" as an array of objects. > 0 ={id: 800, main: 'Clear', description: 'clear sky', icon: '01d'}
  // description = clear sky'icon ='01d' id =800 main ='Clear'
  // We take the first object [0] and read its "description" field,
  // which contains a human-readable text like "clear sky" or "light rain"
  const description = data.weather[0].description;
  // Extract the weather icon code (e.g., "01d")
  const icon = data.weather[0].icon;
  // Extract humidity percentage
  const humidity = data.main.humidity;
  // Extract wind speed in m/s
  const windSpeed = data.wind.speed;
  // Extract atmospheric pressure in hPa
  const pressure = data.main.pressure;
  // Extract the "feels like" temperature
  const feelsLike = data.main.feels_like;

  // Update the DOM elements
  // Update the city name in the UI
  document.getElementById("city-name").textContent = cityName;

  // Update the temperature in the UI (rounded)
  document.getElementById("temperature").textContent =
    `${Math.round(temperature)}°C`;

  // Update the weather description in the UI
  document.getElementById("description").textContent = description;

  // Update the "feels like" temperature (rounded) in the UI
  document.getElementById("feels-like").textContent =
    `${Math.round(feelsLike)}°C`;

  // Update the humidity in the UI
  document.getElementById("humidity").textContent = `${humidity}%`;

  // Update the wind speed in the UI
  // Convert wind speed from m/s to km/h and round it
  document.getElementById("wind").textContent =
    `${Math.round(windSpeed * 3.6)} km/h`;

  // Update the pressure in the UI
  document.getElementById("pressure").textContent = `${pressure} hPa`;

  // Build the full icon URL using the icon code from the API
  const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  // Update the weather icon image source
  document.getElementById("weather-icon").src = iconURL;

  // Make sure the weather card becomes visible (in case it was hidden)
  document.getElementById("current-weather").style.display = "block";
}

// Render forecast cards
function displayForecast(data) {
  console.log("Displaying forecast:", data);
  // TODO: Create forecast cards
}

// Save search history
function saveHistory(city) {
  console.log("Saving history:", city);
  // TODO: Save to localStorage
}

// Load search history on page load
function loadHistory() {
  console.log("Loading history");
  // TODO: Load from localStorage
}

// Initialize app
function init() {
  console.log("App initialized");
  loadHistory();
}

// Run init when page loads
init();
