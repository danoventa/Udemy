var tvs = [
    {type: 'flat'},
    {type: 'flat'},
    {type: 'curved'},
    {type: 'flat'},
    {type: 'curved'},
    {type: 'curved'},
    {type: 'flat'}
];

var tvTypes = tvs.reduce(function(arr, tv){
    if(tv.type === 'flat'){arr.flat += 1}
    if(tv.type === 'curved'){arr.curved += 1}
    return arr
}, {flat: 0, curved: 0});

console.log(tvTypes);

function balancedParens(string){
    return string.split("").reduce(function(previous, char){
        if(previous < 0) {return previous}
        if(char==="("){return ++previous;}
        if(char===")"){return --previous;}

        return previous;
    }, 0);
};

console.log(balancedParens('((((( )))))'));


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

