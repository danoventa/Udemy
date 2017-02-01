

// chained promises
function waitASecond(seconds){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            seconds++;
            resolve(seconds);
        }, 10000);
    });
}
// runs twice
waitASecond(0)
    .then(waitASecond)
    .then(function(seconds){
        console.log(seconds);
    });
// runs thrice
waitASecond(0)
    .then(waitASecond)
    .then(waitASecond)
    .then(function(seconds){
        console.log(seconds);
    })

// basics
let promise = new Promise(function(resolve, reject){
    setTimeout(function() {
        reject('Furled');
    },
        1400
    );
});

promise.then(function(value){
    console.log(value);
}, function(error) {
    console.log(error);
});