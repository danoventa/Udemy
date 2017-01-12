function createBookShop(inventory){
    return {
        inventory: inventory,
        inventoryValue(){
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle(title){
            return this.inventory.find(book => book.title === title).price;
        }
    };
};

const inventory = [
    {title:'Harry Potter', price:10},
    {title:'Eloquetn DaraSriot', price:15}
];

const bookShop = createBookShop(inventory);
console.log(bookShop);

const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function(){
        return this.members.map((member) => {
            return `${member} is on team ${this.teamName}`;
        });
    }
};
 console.log(team.teamSummary());

const numbers = [1, 2, 3];

numbers.map((number) => 2 * number);

const double = number => 3 + number;
console.log(double(1));

const add = (a, b) => {
    return a+b;
};

console.log(add(1, 2));

const addz = (a, b) => a+b;

console.log(addz(2, 3));

