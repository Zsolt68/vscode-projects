 # 🌤️ Weather Dashboard

<img src="assets/docs/intothewoods-responsive.png" alt="An image representing how the site looks across different devices of varying size.">

[View the live project here.]

A responsive, user-friendly weather application that allows users to search for any city and instantly view the current weather conditions along with a 5‑day forecast. Built with HTML, CSS, JavaScript, Bootstrap, and the OpenWeather API.

By Zsolt Földes.

---

## 📁 Project Structure

weather-dashboard/
│
├── index.html
├── style.css
├── script.js
└── README.md




- **index.html** — Main application page using Bootstrap for layout.  
- **style.css** — Custom styling layered on top of Bootstrap.  
- **script.js** — API calls, DOM manipulation, forecast rendering, and error handling.  
- **README.md** — Documentation for deployment, features, and testing.

---

## 🚀 Features

- **City Search** — Enter any city name to retrieve live weather data.  
- **Current Weather Display** — Temperature, conditions, humidity, wind speed, and weather icon.  
- **5‑Day Forecast** — Automatically generated forecast cards using OpenWeather’s forecast API.  
- **Responsive Layout** — Built with Bootstrap for mobile‑first responsiveness.  
- **Error Handling** — Clear feedback for invalid city names or network issues.  
- **Clean UI** — Modern, minimal design with custom CSS enhancements.

---

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- Bootstrap 5  
- JavaScript (ES6+)  
- OpenWeather API  > https://home.openweathermap.org/api_keys
- Google Fonts (Inter)

---

## 🌐 Live Demo

Add your deployed link here once hosted on GitHub Pages:

https://yourusername.github.io/weather-dashboard/
---

## 🔧 How It Works

1. User enters a city name.  
2. JavaScript sends a request to the **OpenWeather Current Weather API**.  
3. If successful, the UI updates with:  
   - City name  
   - Temperature (°C)  
   - Weather description  
   - Humidity  
   - Wind speed  
   - Weather icon  
4. A second request retrieves the **5‑day forecast**, which is displayed as cards.  
5. Errors (e.g., invalid city) are handled gracefully.

---

## 📸 Screenshots

Add screenshots here once your UI is ready:

assets/images/screenshot-home.png
assets/images/screenshot-forecast.png


---

## 🧪 Testing

- Tested on Chrome, Firefox, and Edge.  
- Verified responsive behaviour on mobile, tablet, and desktop.  
- Tested error handling with invalid city names.  
- Verified API responses and DOM updates.

---

## 📦 Deployment

To deploy using GitHub Pages:

1. Push your project to a GitHub repository.  
2. Go to **Settings → Pages**.  
3. Select the `main` branch and `/root` folder.  
4. Save and wait for the deployment link.

---

## 📝 Future Enhancements

- Search history saved in localStorage  
- Dark mode toggle  
- Geolocation support (“Use my location”)  
- Custom weather icons  
- Animated backgrounds based on weather conditions  

---

## 🙌 Credits

- OpenWeather API  
- Bootstrap  
- Google Fonts  





