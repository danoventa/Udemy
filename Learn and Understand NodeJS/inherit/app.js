/**
 * Created by danny on 12/7/2016.
 */

var EventEmitter = require('events');
var util = require('util');

function Greeter(){
    this.greeting = 'Hellow Woarled';
}
util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function(){
    console.log(this.greeting);
    this.emit('greet');
};

var greeter1 = new Greeter();

greeter1.on('greet', function(){
    console.log("someone greeted!");
});

greeter1.greet()