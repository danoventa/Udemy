

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