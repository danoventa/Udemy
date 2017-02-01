let promise = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve('Donezo');
    },
        1400
    );
});

promise.then(function(value){
    console.log(value);
});