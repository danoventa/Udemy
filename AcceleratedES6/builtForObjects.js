/**
 * Created by danny on 2/4/2017.
 */



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

