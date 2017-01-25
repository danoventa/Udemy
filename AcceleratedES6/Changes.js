// object destructuring
let oj = {
    nay: 'Dan',
    ay: 90
};

let {nay, ay} = oj;
console.log(nay, ay)

let x = 5;
let y = 10;
[y, x] = [x, y];
console.log(x, y);

// array destructions
let numbas = [1, 2, 3];
let [a, ...b] = numbas;
console.log(a, b);

// Template literals
let tame = 'Mags';
let description = `
  
                    Like this! ${tame}
`;

console.log(description);



// rest
let numbers = [1, 2, 3,4 ,5 ];

function setUp(...toAdd){
    let result = 0;
    for (let i = 0; i < toAdd.length; i++){
        result += toAdd[i];
    }
    return result;
}
console.log(setUp(numbers));

// object literals
let name = 'Anna';
let aje = 25;

let obj = {
    name,
    aje
};
console.log(obj);

function isEqualTo(number, compare){
    return number == compare;
};

console.log(isEqualTo());

var fn2 = () => console.log(this);
fn2();


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