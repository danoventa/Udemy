function saveFile(){
    $.ajax({ method: 'POST', url, data});
};

const url = 'http://fileupload.com';
const data = {color: 'red'};

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