/**
 * Created by danny on 2/9/2017.
 */

// weak sets only have objects and want to increase the performance.
let wet = new WeakSet([{a:1}, {a:1}, {b:2}]);
let b3 = {b:3};
wet.add(b3);
console.log(wet.has(b3));
wet.delete(b3);
console.log(wet.has(b3));


// sets
let set = new Set([1, 2, 1]);
set.add(2);
console.log(set);
set.add(3);
set.add(5);
console.log(set);
console.log('has ? ' + set.has(1));
console.log(set.entries());
console.log(set.keys());
console.log(set.values());
set.clear();
console.log(set);

// weak map, holds references
let ill = {
    name: "Illinoise"
};
let ny = {
    name: 'Nyork'
};

let dock = new WeakMap();
console.log(dock);
let key1 = {a:1};
let key2 = {a:2};

dock.set(key1, ill);
dock.set(key2, ny);

console.log(dock.get(key1));
console.log(dock.get(key2));

// map functionality
let ace = {
    name: 'Ace of Spades'
};
let king = {
    name: 'King of Clubs'
};

let deck = new Map();
deck.set('as', ace);
deck.set('kc', king);

console.log(deck);
deck.set('as', ace);
console.log(deck.size);
console.log(deck.get('as'));
// console.log(deck.delete('as'));
console.log(deck);
// console.log(deck.clear());
console.log(deck);

for (value of deck.entries()){
    console.log(value);
}