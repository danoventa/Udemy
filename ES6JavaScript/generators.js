class Comment {
    constructor(content, children){
        this.content = content;
        this.children = children;
    }

    *[Symbol.iterator](){
        yield this.content;
        for (let child of this.children){
            yield* child;
        }
    }
}

const children = [
    new Comment('good comment', []),
    new Comment('bad comment', []),
    new Comment('meh', [])
]

const tree = new Comment('Great post!', children);

const values = [];
for(let value of tree){
    values.push(value)
};

console.log(values);

const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function*(){
        yield this.lead;
        yield this.tester;
    }
}

const engineringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    [Symbol.iterator]: function*(){
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    }
}

const names = [];
for(let name of engineringTeam){
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