import * as ELEMENTS from '/src/elements';
import {Http} from 'src/http';
import {WeatherData} from 'src/weather-data';

APP_ID = '';

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

function searchWeather(){
    const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
    if(CITY_NAME.length == 0){
        return alert('Please enter a city name')
    }
    const URL = 'http://api.openwheathermap.org/data/2.5/weather?q=' + CITY_NAME + "&units=metric&appid=" + APP_ID;

    Http.fetchData(URL)
        .then(responseData =>{
            const WEATHER_DATA  = new WeatherData(CITY_NAME, responseData.weather[0].description.toUpperCase());
            const WEATHER_PROXY = new Proxy(WEATHER_DATA, WEATHER_PROXY_HANDLER);
            WEATHER_PROXY.temperature = responseData
        })
        .catch(error => alert(error));
}

function updateWeather(weatherData){
    ELEMENTS.ELEMENT_WEATHER_CITY.textContent = weatherData.cityName;
    ELEMENTS.ELEMENT_WEATHER_DESCRIPTION.textContent = weatherData.description;
    ELEMENTS.ELEMENT_WEATHER_TEMPERATURE.textContent = weatherData.temperature;

    ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'block';
}