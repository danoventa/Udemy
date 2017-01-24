
// new syntax to write functions


var fn = (a, b) => a + b;
console.log(fn(1, 2))

fn = () => {
    console.log('hello!');
};
fn();

// let and const vs var
let age = 30;
if(true){
    let age = 25;
    console.log(age);
};
console.log(age);

// Scope of variables, var wouldn't do this.

const agze = 90;
// agze = 90 would error out, age is now a constant.
console.log(agze);