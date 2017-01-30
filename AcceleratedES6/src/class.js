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