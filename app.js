let cityInput = document.getElementById("cityInput");
let searchButton = document.getElementById("search");
let resultDiv = document.getElementById("result");

resultDiv.style.display = "none"; 

searchButton.addEventListener("click", function() {
    let cityName = cityInput.value.trim();
    console.log("City name:", cityName); 
     resultDiv.style.display = "block";
     resultDiv.innerHTML = "Loading...";
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`)
        .then(response => response.json())
        .then(data => {
            console.log("Geocoding data:", data); 
            if(data.results && data.results.length > 0) {
                let latitude = data.results[0].latitude;
                let longitude = data.results[0].longitude;
                let name = data.results[0].name;
                console.log("Latitude:", latitude, "Longitude:", longitude, "Name:", name);
                fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
                    .then(response => response.json())
                    .then(forecastData => {
                        console.log("Forecast data:", forecastData);
                        resultDiv.innerHTML = `<p>Temperature in ${name}: ${forecastData.current_weather.temperature}°C</p>`;
                    })
                    .catch(error => {
                        console.error("Error fetching forecast data:", error);
                    });
            }
            else{
                console.error("No results found for the specified city.");
                resultDiv.innerHTML = `<p>City not found.</p>`;
                return;
            }
        })
        .catch(error => {
            console.error("Error fetching geocoding data:", error);
        });
});