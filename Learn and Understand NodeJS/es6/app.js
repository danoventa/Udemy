'use string';

class Person {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet(){
        console.log('Hello,  ' + this.firstname + " " + this.lastname);
    }
}

var john = new Person('John', 'Doe');
john.greet();

var name = "John Doe";
var greet = "hell" + name;
var greet2 = `Hello ${name}`;

console.log(greet);
console.log(greet2);

var obj = {
    name: "John Doe",
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}

obj.greet();
obj.greet.call({name: 'Jane Doe'});
obj.greet.apply({name: 'Janey Doe'});