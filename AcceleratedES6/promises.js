

// chained promises, with error
function waitASecond(seconds){
    return new Promise(function(resolve, reject){
        if(seconds >2){
            reject('Rejected');
        } else {
            setTimeout(function () {
                seconds++;
                resolve(seconds);
            }, 1000);
        }
    });
}
// runs twice
waitASecond(1)
    .then(waitASecond)
    .then(function(seconds){
        console.log(seconds);
    });
// runs thrice
waitASecond(1)
    .then(waitASecond)
    .then(waitASecond)
    .then(function(seconds){
        console.log(seconds);
    })
    .catch(function(error){
        console.log(error);
    });

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