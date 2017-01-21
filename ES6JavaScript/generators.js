

const engineringTeam = {
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave'
}

function* TeamIterator(team){
    yield team.lead;
    yield team.manager;
    yield team.engineer;
}

const names = [];
for(let name of TeamIterator(engineringTeam)){
    names.push(name);
}
console.log(names);

function* colors(){
    yield 'red';
    yield 'blue';
    yield 'green'
}

const gen2 = colors();
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());

function* numbers (){
    yield '2';
}
const gen = numbers()
console.log(numbers());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

const colorZ = ['red', 'green', 'blue'];

for(let color of colorZ){
    console.log(color);
}