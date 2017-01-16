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