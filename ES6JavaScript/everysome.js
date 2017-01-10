var computers = [
    {name: 'Apple', ram: 24},
    {name: 'Compaq', ram: 3},
    {name: 'Acer', ram: 32}
];

var allCan = true;
var someCan = false;

for (var i = 0; i < computers.length; i++){
    var computer = computers[i];
    
    if (computer.ram < 16) {
        allCan = false;
    }else{
        someCan = true;
    }
};

var all = computers.every(function(computer){
    return computer.ram > 16;
});

var some = computers.some(function(computer){
    return computer.ram > 16;
});

console.log(some);
console.log(all);
