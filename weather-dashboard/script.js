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
document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
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

// Fetch and show the 5-day forecast on the page for the selected city
function getForecast(city) {
  console.log("Fetching forecast for:", city);

  // Build the API URL for the 5-day forecast
  // forecastURL should be something like:
  // "https://api.openweathermap.org/data/2.5/forecast"
  // We add the city name, API key, and units (metric)
  let url = forecastURL + "?q=" + city + "&appid=" + apiKey + "&units=metric";

  // Call the OpenWeather API using fetch()
  fetch(url)
    .then(function (response) {
      // If the API returns an error (like city not found), response.ok will be false
      if (!response.ok) {
        throw new Error("Could not fetch forecast");
      }

      // Convert the API response into JSON format
      return response.json();
    })
    .then(function (data) {
      console.log("Forecast data received:", data);

      // Send the forecast data to the function that displays it on the page
      displayForecast(data);
    })
    .catch(function (error) {
      // If something goes wrong, show a simple message o the page
      console.log("Error fetching forecast:", error);

      // Show an error message in the forecast container
      forecastCards.innerHTML = "<p>Could not load forecast.</p>";
    });
}

// Render and displays the current weather data to the UI/web page
function displayCurrentWeather(data) {
  console.log("Displaying current weather:", data);

  // Extract the values we need from the API response
  // Extract the city name returned by the API
  const cityName = data.name;
  // Extract the current temperature in Celsius
  const temperature = data.main.feels_like;
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
  // Clear old forecast cards
  forecastCards.innerHTML = "";

  // The API gives data every 3 hours (40 entries)
  // We pick one entry per day → around the same time each day
  for (let i = 0; i < data.list.length; i += 8) {
    // Get one forecast entry
    let item = data.list[i];

    // Create a column for the card
    let col = document.createElement("div");
    col.className = "col-md-2";

    // Create the card
    let card = document.createElement("div");
    card.className = "card p-2 mb-3 text-center";

    // Get the date
    let date = item.dt_txt.split(" ")[0];

    // Get temperature
    let temp = Math.round(item.main.temp);

    // Get description
    let desc = item.weather[0].description;

    // Get icon
    let icon = item.weather[0].icon;
    let iconURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

    // Fill the card with info
    card.innerHTML = `
      <h6>${date}</h6>
      <img src="${iconURL}" alt="Weather Icon">
      <p>${temp}°C</p>
      <p>${desc}</p>
    `;

    // Add card to column
    col.appendChild(card);

    // Add column to forecast section
    forecastCards.appendChild(col);
  }
}

// Save search history
// STEP 1 — Try to load previously saved search history from localStorage
// localStorage.getItem("history") tries to read a value saved under the key "history".
// If it exists → it returns a STRING (e.g., '["Dublin","London"]').
// If it does NOT exist → it returns null.
let saved = localStorage.getItem("history");

// We declare searchHistory here so we can assign to it inside the if/else below
let searchHistory;
// If 'saved' is NOT null, it means we found something in localStorage.
if (saved) {
  // JSON.parse() converts the saved STRING back into a real JavaScript Array.
  // Example: '["Dublin","London"]' → ["Dublin", "London"]
  searchHistory = JSON.parse(saved);
  // If 'saved' is null, it means this is the first time the user is using the app.
} else {
  // Start with an empty array so the rest of the app has something to work with.
  searchHistory = [];
}
// This helps you confirm in the console that the history loaded correctly.
console.log("Loaded history:", searchHistory);

// STEP 2 — Save a new city into history
function saveHistory(city) {
  console.log("Saving history:", city);

  // Avoid duplicates search history. If the city is already in the array, we don't add it again.
  if (!searchHistory.includes(city)) {
    searchHistory.unshift(city); // Add a new item (city) to the beginning of the array.
  }
  // Keep only the last 8 history searches
  searchHistory = searchHistory.slice(0, 8);

  // Save updated array back to localStorage
  localStorage.setItem("history", JSON.stringify(searchHistory));

  // Update the UI
  renderHistory();
}

// STEP 3 — Load search history on page load
function loadHistory() {
  console.log("Loading history");
  // Render the history list in the UI
  renderHistory();
}
// STEP 4 — This function shows the saved search history on the page
function renderHistory() {
  // Clear the existing search history list so we don't duplicate every time we update it
  historyList.innerHTML = "";

  // Go through each saved city stored in the searchHistory array
  searchHistory.forEach(function (city) {
    // Create a new <li> element for the list
    let li = document.createElement("li");

    // Create a button that shows the searched city name
    let btn = document.createElement("button");

    // Add Bootstrap classes for styling
    btn.className = "btn btn-secondary w-100 mb-2";

    // Put the searched city name on the button
    btn.textContent = city;

    // When the button is clicked, search that city again
    btn.addEventListener("click", function () {
      cityInput.value = city; // Put city back into input box
      getCurrentWeather(city); // Fetch current weather
      getForecast(city); // Fetch forecast (when added)
    });

    // Add the button into the <li>
    li.appendChild(btn);

    // Add the <li> into the history list on the page
    historyList.appendChild(li);
  });
}

// Initialize app
function init() {
  console.log("App initialized");
  loadHistory();
}

// Run init when page loads
init();
