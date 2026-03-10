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

const currentCity = document.getElementById("current-city");
const currentDate = document.getElementById("current-date");
const currentTemp = document.getElementById("current-temp");
const currentDescription = document.getElementById("current-description");
const currentIcon = document.getElementById("current-icon");
const currentFeelsLike = document.getElementById("current-feels-like");
const currentHumidity = document.getElementById("current-humidity");
const currentWind = document.getElementById("current-wind");
const currentPressure = document.getElementById("current-pressure");

const currentEmpty = document.getElementById("current-empty");
const forecastEmpty = document.getElementById("forecast-empty");

const historyList = document.getElementById("history-list");
const forecastCards = document.getElementById("forecast-cards");


// ===============================
// EVENT LISTENERS
// ===============================

// Search button click
searchBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Search button clicked");

    // TODO: Add search logic here
});


// ===============================
// MAIN FUNCTIONS (empty for now)
// ===============================

// Fetch current weather
function getCurrentWeather(city) {
    console.log("Fetching current weather for:", city);
    // TODO: Add API call here
}

// Fetch 5-day forecast
function getForecast(city) {
    console.log("Fetching forecast for:", city);
    // TODO: Add API call here
}

// Render current weather to the UI
function displayCurrentWeather(data) {
    console.log("Displaying current weather:", data);
    // TODO: Update DOM elements
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