/**
 * Created by Daniel A. Noventa on 12/2/2016.
 */

// scope
(function (lastname){
    var firstname = "Jonas";
    console.log(firstname);
    console.log(lastname);

}("Arks"));

// pass by value
function change(b){
    b = 2;
}

var a = 1;
change(a);
console.log(a)

// pass by reference
function changeObj(d){
    d.prop1 = function(){};
    d.prop2 = {};
};
var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);


// Function to bject and prototype inheritance example
function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function(){
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
}

var john = new Person('Jane', 'GI');
john.greet();

// example of object.
var greet = require('./greet');
greet();

var person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: function(){
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    }

};

person.greet();
console.log(person['firstname']);
