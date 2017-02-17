'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Http = function () {
    function Http() {
        _classCallCheck(this, Http);
    }

    _createClass(Http, null, [{
        key: 'fetchData',
        value: function fetchData(url) {
            return new Promise(function (resolve, reject) {
                var HTTP = new XMLHttpRequest();
                HTTP.open('GET', url);
                HTTP.onreadystatechange = function () {
                    if (HTTP.readyState == XMLHttpRequest.DONE && HTTP.status == 200) {
                        var RESPONSE_DATA = JSON.parse(HTTP.responseText);
                        resolve(RESPONSE_DATA);
                    } else if (HTTP.readyState == XMLHttpRequest.DONE) {
                        console.log('Yo');
                        reject('Something went wrong!');
                    }
                };
            });
        }
    }]);

    return Http;
}();
//# sourceMappingURL=http.js.map