// Function to set background based on weather condition
// function init(weatherData) {
//   document.body.style.backgroundRepeat = 'no-repeat';
//     document.body.style.backgroundSize = 'cover';
//     document.body.style.backgroundPosition = 'center';
//     switch (weatherData.weather[0].main) {
//         case 'Clear':
//             document.body.style.backgroundImage = "url('./images/clearPicture.jpg')";
//             break;
//         case 'Clouds':
//             document.body.style.backgroundImage = "url('./images/cloudy.jpg')";
//             break;
//         case 'Rain':
//         case 'Drizzle':
//             document.body.style.backgroundImage = "url('./images/rain.jpeg')";
//             break;
//         case 'Mist':
//             document.body.style.backgroundImage = "url('./images/mistPicture.jpg')";
//             break;    
//         case 'Thunderstorm':
//             document.body.style.backgroundImage = "url('./images/stromPicture.jpg')";
//             break;
//         case 'Snow':
//             document.body.style.backgroundImage = "url('./images/snowPicture.jpg')";
//             break;
//         default:
//             // Default background or no change
//             break;
//     }
// }

// Weather fetching function
async function getWeather(city) {
    const apikey = "4767455b1ffd7c81c6ee5ee22627c7d2";
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&appid=${apikey}`);
        
        if(!res.ok) {
            throw new Error(`HTTP error! Status:${res.status}`);
        }

        const data = await res.json();
        
        // Update weather display
        document.getElementById("w").textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById("w1").textContent = `Pressure: ${data.main.pressure} hPa`;
        document.getElementById("w2").textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById("w3").textContent = `Wind Speed: ${data.wind.speed} m/s`;
        
        // Call init to change background
        //init(data);
        
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById("weatherOutput").textContent = 'Error: ' + error.message;
    }
}

// Event listener
document.getElementById('btn').addEventListener('click', function() {
    const city = document.getElementById('inp').value;
    getWeather(city);
});