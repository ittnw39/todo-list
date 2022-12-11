
const API_KEY = "7384c1771e5ca144490973d82d5604ea";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}, ${data.main.temp}℃`;

    });
}

function onGeoError(position){
alert("당신의 위치를 찾지 못했어요.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

