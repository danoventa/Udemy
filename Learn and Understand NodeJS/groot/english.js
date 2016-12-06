/**
 * Created by danny on 12/5/2016.
 */
var greetings = require('./grootings.json');


var groot = function(){
    console.log(greetings.en)
};

module.exports = groot;