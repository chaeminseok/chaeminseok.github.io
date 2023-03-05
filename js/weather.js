const API_KEY="19b124dc208298ee719cc3af0a1f65e3";

function onGeoSuc(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) =>response.json())
    .then((data) =>{
        const weather=document.querySelector("#weather span:first-child");
        const city=document.querySelector("#weather span:last-child");
        city.innerText=data.name;
        weather.innerText= `📍${data.weather[0].main} / ${data.main.temp}`;
    }); 
}
function onGeoFail(){
    alert("Can't find you");
}
navigator.geolocation.getCurrentPosition(onGeoSuc,onGeoFail); 