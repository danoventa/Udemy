// old way of looping
var colors = ['red', 'blue', 'green'];

for (var i=0; i < colors.length; i++){
    console.log(colors[i]);
}

// new way
colors.forEach(function(color){
    console.log(color);
});

// array of nums
var nums = [1, 2, 3, 4, 5];
// var to hold sum
var sum = 0;
// loop over array increment sum
nums.forEach(function(number){
   sum += number;
});
// print sum
console.log(sum);

function adder(number){
    sum += number;
};

nums.forEach(adder);
console.log(sum);