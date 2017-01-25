// well known symbols
let numbers1 = [1, 2, 3];
console.log(numbers1 + 1);

numbers1[Symbol.toPrimitive] = function(){
    return 999;
}

console.log(numbers1+1)

// examples

let symbol3 = Symbol.for('age');
let symbol4 = Symbol.for('age');

let person1 = {
    name: 'Dane',
    age: 900
};

function makeAge(person1){
    let ageSymbol = Symbol.for('age');
    person1[ageSymbol] = 26;
}

makeAge(person1);
console.log(person1[symbol3]);
console.log(person1[symbol4]);
console.log(person1['age']);

// a new primitive type

let symbol1 = Symbol('debug');
let symbol2 = Symbol('debug');

let obj1 = {
    name: 'max',
    [symbol1]: 22
}

// meta programming
console.log(obj1[symbol1]);
console.log(symbol2);