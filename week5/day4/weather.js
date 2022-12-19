// const APIkey = import 

const searchButton = document.querySelector(".search");

const getWeather = async () => {
    const weatherInput = document.querySelector(".weather").value;
    console.log(weatherInput);
    const weatherData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${weatherInput}&units=imperial`
    );
    const json = await weatherData.json();
    const currentCity = document.getElementById("current-city")
    const currentTemp = document.getElementById("current-temp")
    const feelsLike = document.getElementById("feels-like")
    const high = document.getElementById("high")
    const low = document.getElementById("low")
    currentCity.innerText = json.name
    currentTemp.innerText = `${json.main.temp}°F`
    feelsLike.innerText = `Feels Like: ${json.main.feels_like}°F`
    high.innerText = `High ${json.main.temp_max}°F`
    low.innerText = `Low ${json.main.temp_min}°F`
    console.log(json);
    
};

searchButton.addEventListener("click", getWeather);