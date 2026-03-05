// ---------------------------------------------
// API Key + Base URLs
// ---------------------------------------------
const apiKey = "7ee36c6b983b4032432c855dd97f79f3";
const currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast";

// ---------------------------------------------
// Search Button Event
// ---------------------------------------------
document.getElementById("search-btn").addEventListener("click", () => {
  const city = document.getElementById("search-input").value.trim();
  if (city) {
    getWeather(city);
    getForecast(city);
  }
});

// ---------------------------------------------
// Fetch Current Weather
// ---------------------------------------------
async function getWeather(city) {
  const url = `${currentWeatherURL}?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    showError(error.message);
  }
}

// ---------------------------------------------
// Display Current Weather
// ---------------------------------------------
function displayWeather(data) {
  document.getElementById("city-name").textContent = data.name;
  document.getElementById("temperature").textContent = `${data.main.temp}°C`;
  document.getElementById("description").textContent = data.weather[0].description;
  document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
  document.getElementById("wind").textContent = `Wind: ${data.wind.speed} m/s`;

  const iconCode = data.weather[0].icon;
  document.getElementById("weather-icon").src =
    `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  document.getElementById("weather-container").classList.remove("d-none");
}

// ---------------------------------------------
// Fetch 5-Day Forecast
// ---------------------------------------------
async function getForecast(city) {
  const url = `${forecastURL}?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Forecast not available");
    }

    const data = await response.json();
    displayForecast(data);
  } catch (error) {
    showError(error.message);
  }
}

// ---------------------------------------------
// Display 5-Day Forecast
// ---------------------------------------------
function displayForecast(data) {
  const forecastContainer = document.getElementById("forecast-cards");
  forecastContainer.innerHTML = "";

  // Filter forecast to one reading per day at 12:00
  const dailyForecasts = data.list.filter(item =>
    item.dt_txt.includes("12:00:00")
  );

  dailyForecasts.forEach(day => {
    const date = new Date(day.dt_txt).toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short"
    });

    const icon = day.weather[0].icon;
    const temp = Math.round(day.main.temp);

    const card = document.createElement("div");
    card.classList.add("col-md-2", "col-sm-4", "forecast-card");

    card.innerHTML = `
      <p class="forecast-date">${date}</p>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon">
      <p class="forecast-temp">${temp}°C</p>
      <p class="text-capitalize">${day.weather[0].description}</p>
    `;

    forecastContainer.appendChild(card);
  });

  document.getElementById("forecast-container").classList.remove("d-none");
}

// ---------------------------------------------
// Error Handling
// ---------------------------------------------
function showError(message) {

    document.getElementById("city-name").textContent = "";
    document.getElementById("temperature").textContent = "";
    document.getElementById("description").textContent = "";
    document.getElementById("humidity").textContent = "";
    document.getElementById("wind").textContent = "";
    document.getElementById("weather-icon").src = "";
  alert(message);
}


