/**
 * Created by danny on 12/6/2016.
 */

function Emitter(){
    this.events = {};
}

Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || [] ;
    this.events[type].push(listener);
};

Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach(function(listener){
            listener();
        })
    }
};

module.exports = Emitter;

// aside function arrays
var arr = [];

arr.push(function(){
    console.log('hello world uno');
});

arr.push(function(){
    console.log('hello world du');
});

arr.push(function(){
    console.log('hello world san');
});

arr.forEach(function(item){
    item();
})