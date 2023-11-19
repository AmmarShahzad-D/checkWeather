// API KEY

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units = metric

// https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=d42f8a21693ef297e87d969198a7b8dd&units=metric

const apiKey = "d42f8a21693ef297e87d969198a7b8dd";
const units = "metric";
const searchBox = document.querySelector(".input");
const searchBtn = document.querySelector(".button");

const url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=${units}&q=`;

async function checkWeather(city) {
  const errorContainer = document.querySelector(".error");
  const weatherContainer = document.querySelector(".weather");
  if (!city) {
    errorContainer.style.display = "block";
    weatherContainer.style.display = "none";
  } else {
    const response = await fetch(url + city);
    let data = await response.json();

    console.log(data);

    document.querySelector(".temp").innerHTML =
      Math.floor(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".speed").innerHTML = `${data.wind.speed}km/h `;

    const weatherIcon = data.weather[0].icon;
    const iconUrl =
      " https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
    document.querySelector(".weather-icon").setAttribute("src", iconUrl);

    weatherContainer.style.display = "block";
    errorContainer.style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
