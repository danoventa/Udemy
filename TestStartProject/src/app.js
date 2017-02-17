// import * as ELEMENTS from 'elements';
import * as ELEMENTS from 'elements';

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

function searchWeather(){
    const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
    If(CITY_NAME.length == 0){
        return alert('Please enter a city name')
    };
    alert(CITY_NAME);
}