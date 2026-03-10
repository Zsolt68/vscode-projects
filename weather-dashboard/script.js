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
    const city = cityInput.value.trim();

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
        .then(response => {
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
        .then(data => {
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
        .catch(error => {
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