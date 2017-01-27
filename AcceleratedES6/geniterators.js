// custom iterable objects
let person1 = {
    name: 'Mags',
    hobbies: ['reading', 'derping', 'writing', '<3'],
    [Symbol.iterator]: function(){
        let i = 0;
        let hobbies = this.hobbies;
        return {
            next: function(){
                let value = hobbies[i];
                i++;
                return{
                    done: i > hobbies.length ? true : false,
                    value: value
                };
            }
        };
    }
};
for(let hobby of person1){
    console.log(hobby);
}

// change the way the iterator works.
let arrie2 = [1, 2, 3];

// assign a function to the iterator type of array
arrie2[Symbol.iterator] = function(){
    let nextValue = 2;
    return {
        next: function(){
            nextValue++;
            return {
                done: nextValue > 6 ? true : false,
                value: nextValue
            };
        }
    };
};

let iter2 = arrie2[Symbol.iterator]();
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());


// iterators example 1
let arrie1 = [1, 2, 3];

// prints the type of the iterator
console.log(typeof arrie1[Symbol.iterator]);

// assign the iter1 the arri1 iterator function
let iter1 = arrie1[Symbol.iterator]();

// iterates through the array until done
console.log(iter1.next());
console.log(iter1.next());
console.log(iter1.next());
console.log(iter1.next());
