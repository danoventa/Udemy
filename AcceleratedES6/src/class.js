class Pearson{
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name.toUpperCase();
    }

    set name(value){
        if (value.length > 2){
            this._name = value;
        }
    }
}

let pearson = new Pearson('Daxx');
console.log(pearson.name);
pearson.name = 'Dars';
console.log(pearson.name);
console.log(pearson._name);
pearson.name = 's';
console.log(pearson.name);
console.log(pearson._name);

class Helper {
    static logDice(message){
        console.log(message);
        console.log('dice');
    }

    logDice(message){
        console.log(message);
        console.log('normal dice');
    }
}
Helper.logDice('Fancier');

let helper = new Helper();
helper.logDice('Fancy');

class  Person{
    constructor(name = 'Unnamed :('){
        this.name = name;
    }

    greet(){
        console.log('Hello, my bane is ' + this.name + ' and I am ' + this.age);
    }
}

let person = new Person('Dax');

person.greet();

class Dax extends Person{
    constructor(age, name){
        super(name);
        this.age = age;
    }

    greeting(){
        super.greet()
    }
}

let dax = new Dax(90, 'slax');
dax.greet();
dax.greeting();
console.log(person.__proto__);
console.log(dax.__proto__);