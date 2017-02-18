'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WeatherData = exports.WeatherData = function WeatherData() {
    _classCallCheck(this, WeatherData);

    this.cityName = cityName;
    this.description = description;
    this.temperature = '';
};

var WEATHER_PROXY_HANDLER = exports.WEATHER_PROXY_HANDLER = {
    get: function get(target, property) {
        return Reflect.get(target, property);
    },
    set: function set(target, property, value) {
        var newValue = (value * 1.8 + 32).toFixed(2) + 'F.';
        return Reflect.set(target, property, newValue);
    }
};
//# sourceMappingURL=weather-data.js.map