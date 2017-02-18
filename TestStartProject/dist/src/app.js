'use strict';

var _elements = require('elements');

var ELEMENTS = _interopRequireWildcard(_elements);

var _http = require('http');

var _weatherData = require('weather-data');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

APP_ID = ''; // import * as ELEMENTS from 'elements';


ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

function searchWeather() {
    var CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
    if (CITY_NAME.length == 0) {
        return alert('Please enter a city name');
    }
    var URL = 'http://api.openwheathermap.org/data/2.5/weather?q=' + CITY_NAME + "&units=metric&appid=" + APP_ID;

    _http.Http.fetchData(URL).then(function (responseData) {
        var WEATHER_DATA = new _weatherData.WeatherData(CITY_NAME, responseData.weather[0].description.toUpperCase());
        var WEATHER_PROXY = new Proxy(WEATHER_DATA, WEATHER_PROXY_HANDLER);
        WEATHER_PROXY.temperature = responseData;
    }).catch(function (error) {
        return alert(error);
    });
}
//# sourceMappingURL=app.js.map