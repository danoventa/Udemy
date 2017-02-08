/**
 * Created by danny on 2/4/2017.
 */

// Arrays



let haroo = [1, 3, 5, 7, 9];
// stops after first match.
console.log(haroo.find(val => val >= 4));

let arroo = [10, 12, 13];
arroo.fill(100);
console.log(arroo);

// use fill with specific indexes
let arrooh = [10, 12, 13];
arrooh.fill(100, 0, 2);
console.log(arrooh);

let arrie = Array(5);
let arrie5 = Array.of(5, 6, 7);
console.log(arrie);
console.log(arrie5);

let newArrie = Array.from(arrie5, val => val * 2);
console.log(newArrie);

// Number functions

let floot = 10.22;
console.log(Number.isInteger(floot));
console.log(Number.isFinite(floot));

let int = 10;
console.log(Number.isInteger(int));
console.log(Number.isFinite(int));

let infinity = Infinity;
console.log(Number.isInteger(infinity));
console.log(Number.isFinite(infinity));

let numbo = NaN;
console.log(Number.isNaN(numbo));

// strings
let name = 'Maximilian';
console.log(name.includes('Max'));

// Math
let dec = -3.333313;
console.log(Math.trunc(dec));

let negnumber = -10;
let number = 10;
let zero = 0;
console.log(Math.sign(negnumber));
console.log(Math.sign(number));
console.log(Math.sign(zero));



// basics of prototypes

let person = {
    name: 'Dax'
};

let boss = {
    name: 'Anna'
};

console.log(person.__proto__ === Object.prototype);
Object.setPrototypeOf(person, boss);

console.log(person.__proto__ === boss);
console.log(person.name);

// extensions of built-in objeccts?

class Obj1 {
    constructor(){
        this.a = 1;
    }
}

class Obj2 {
    constructor(){
        this.b = 2;
    }
}


var obj1 = new Obj1();
var obj2 = new Obj2();

var obj = Object.assign(obj1, obj2);

// received the instance of Obj1
console.log(obj);

