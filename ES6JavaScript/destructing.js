const numbers = [1, 2, 3];

function double(arrie, ...rest){
    if(1 === rest[0]){
        var ret_arr = [];
        for(var i = 0; i < arrie.length; i++){
            ret_arr.push(arrie[i] * 2);
        };
        return ret_arr;
    }else{
        return double(arrie, 1)
    }
}

console.log(double(numbers));

const points = [
    [4, 5],
    [10, 1],
    [0, 40]
];

derps = points.map(([x, y]) => {
    return {x: x, y:y};
});

console.log(derps);


function signup({username, password, email, dob, city}){
  console.log(username, password, email, dob, city);
}

const user = {
    username: 'my name',
    password: 'pw',
    email: 'mail@mail',
    dob: 'dob',
    city: 'city'
}

signup(user);

const Google = {
    locations: ['Mointain View', 'New York', 'London']
};

const { locations: [locatun] } = Google;
console.log(locatun);


const companyes = [
    {name: 'Google', location: 'Mointain View'},
    {name: 'Facebook', location: 'Menlo Park'},
    {name: 'Uber', location: 'San Fransico'}
];''

const [{location}] = companyes;
console.log(location);

const companies = [
  'Google',
    'Facebook',
    'Uber'
];

const [name, name2, ...rest] = companies;
console.log(name, name2, ...rest);

console.log(name);

var savedFiled = {
    extension: '.jpg',
    name: 'repost',
    size: 14040
};

function fileSummary({name, extension, size} ){
    return `The file ${name}.${extension} is of size ${size}`;
};
console.log(fileSummary(savedFiled));

///

var expense = {
    type: 'Business',
    amount: '$45 USD'
};
//
// var type = expense.type;
// var amount = expense.amount;
// or

const { type, amount } = expense;

console.log(type); // Type referencing must be identical.
console.log(amount);