promise = new Promise((resolve, reject) => {
        resolve();
     });

promise.then(() => {
    console.log('finally finished');
}).then(() => {
    console.log('me too!')
}).catch(() => console.log('oopsies')).then(() => console.log('woah'));




console.log(promise);

