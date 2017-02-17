'use strict';

var _elements = require('elements');

var ELEMENTS = _interopRequireWildcard(_elements);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather); // import * as ELEMENTS from 'elements';


function searchWeather() {
    var CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
    If(CITY_NAME.length == 0);
    alert(CITY_NAME);
}
//# sourceMappingURL=app.js.map