var primaryColors = [
    {color: 'red'},
    {color: 'yellow'},
    {color: 'blue'}
];

var reduce_pc = primaryColors.reduce(function(previous, primaryColor){
    previous.push(primaryColor.color);
    return previous;
}, []);

console.log(reduce_pc);



var numbers = [10, 20, 30];
var sum = 0;

for (var i = 0; i<numbers.length;i++){
    sum += numbers[i];
};

var reduce_ret = numbers.reduce(function(sum, number){
    return sum+number;
}, 0); // zero is initial value

console.log(reduce_ret);

