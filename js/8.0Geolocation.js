const API_KEY = "df06c2859013ef5ef188655e7a3ae983";


function onGeoSuccess (position) { 
    const lat = position.coords.latitude; 
    const lon = position. coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; 
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
       

        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError () {
    alert("Can't find you :( Weather needs location");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError); 

/* 
goal: gives me the geolocation of the user
function: navigator.geolocation.getCurrentPosition 
getCurrentPosition requires two arguments (전달인자) 
inorder to recieve the argument, 
we need parameter(매개변수)
parameter () = make a function  
1.  Success 
2.  Error 

what is an api = a way to communicate with other servers 


steps 
1. we need to make const for lattitude and longitude
2. call url from JS 
1) openweathermap -> current weather dad -> copy api calls -> include info (lat, long) ->
add myapikey (inside the profile) -> bring to JS -> include const lat, lon, API-KEY into const url
3. how to get the url (fetch) function
- using fetch you do not have to go to the url 
JS will fetch the url and request 
4. if you want to change different metrics 
go to parameters (매개변수) -> unitis
5. 
weather api's: https://openweathermap.org/

*/