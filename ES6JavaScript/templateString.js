

function getMessage(){
    const year = new Date().getFullYear();

    return 'this year is ' + year;
};

console.log(getMessage());

//vs es 6 template strings

function getTemplatedMessage(){
    return `The year was ${new Date().getFullYear()}`;
};

console.log(getTemplatedMessage());