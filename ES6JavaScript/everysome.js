function Field(value){
    this.value = value;

    this.validate = function(){
        console.log("A OK");
    }
}

Field.prototype.validate = function(){
    return this.value.length > 0;
}

var username = new Field('2cool');
var password = new Field('my_password');
var birthdate =- new Field('10/10/2016');

var fields = [username, password, birthdate];

var formIsValid = fields.every(function(field){
    return field.validate();
});

if(formIsValid){
    console.log("OK!");
}else{
    console.log("error");
}



var names = [
    'alexandrai',
    'mathew',
    'joe'
];

var anna = names.every(function(name){
    return name.length > 4;
});

var sona = names.some(function(name){
    return name.length > 4;
});

console.log(sona);
console.log(anna);



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
