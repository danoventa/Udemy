function* numbers (){
    yield;
}
const gen = numbers()
console.log(numbers());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

const colors = ['red', 'green', 'blue'];

for(let color of colors){
    console.log(color);
}