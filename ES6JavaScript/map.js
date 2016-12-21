



var numbers = [1, 2, 3];
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++){
    doubledNumbers.push(numbers[i] * 2);
}

var doubled = numbers.map(function(number){
    return number * 2;
});

console.log(doubled);
console.log(doubledNumbers);

var cars = [
    {model: 'Buick', price: 'chep'},
    {model: 'Camero', price: 'pensive'}
];

var prices = cars.map(function(car){
    return car.price;
});

prices.forEach(function(price){
    console.log(price);
})