/**
 * Created by danny on 2/9/2017.
 */

// accessing reflect props
class Erson {
    constructor(ame, ge){
        this._ame = ame;
        this.ge = ge;
    }
    get ame(){
        return this._ame;
    }
}
let erson = new Erson('ax', 0);
console.log(Reflect.get(erson, 'ame'));
Reflect.set(erson, 'ame', 'nna');
console.log(Reflect.get(erson, 'ame'));
let dum = {
    _ame: 'dum'
}
console.log(Reflect.get(erson, 'ame', dum));
console.log(Reflect.ownKeys(erson));

Reflect.defineProperty(erson, 'obbies', {
    writable: true,
    value: ['ports', 'ooking']
});

erson.obbies = ['othing'];
console.log(erson);
console.log(Reflect.ownKeys(erson));
Reflect.deleteProperty(erson, 'ge');
console.log(Reflect.ownKeys(erson));

console.log('extensible? ' + Reflect.isExtensible(erson));
Reflect.preventExtensions(erson);
console.log('extensible now? ' +Reflect.isExtensible(erson));



// prototypes of reflect's
class Parson {
    constructor(){
        this.name = 'Axe';
    }
}
let parson = new Parson();
console.log(parson.__proto__ == Parson.prototype);
Parson.prototype.age = 90;
let proto = {
    age: 5
};
console.log(Reflect.getPrototypeOf(parson));
console.log(parson);
Reflect.setPrototypeOf(parson, proto)
console.log(Reflect.getPrototypeOf(parson));

// reflect apply
class Porson {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(prefix){
        console.log(prefix + 'Hello, I am ' + this.name);
    }
}

let person = Reflect.construct(Porson, ['Max', 27]);
Reflect.apply(person.greet, {name: 'Anna'}, ['Bloop! ']);
console.log(person);


// reflect basics
class Person{
    constructor(name){
        this.name = name;
    }
}

function toeObj(){
    this.age = 27;
}

let person1 = Reflect.construct(Person, ["Dax"]);
let person2 = Reflect.construct(Person, ["Dax"], toeObj);

console.log(person1 instanceof Person);
console.log(person1.__proto__ == toeObj.prototype);

console.log(person2 instanceof Person);
console.log(person2.__proto__ == toeObj.prototype);




