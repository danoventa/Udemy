var numbers = [10, 20, 30];
function lessThanFifteen(number){
    return number > 15;
};
function rejects(array, iteratorFunction){
    var black = array.filter(iteratorFunction);
    var good = array.forEach()
    console.log(good);
    return good;
};

console.log(rejects(numbers, lessThanFifteen));

var post = {id:4, title:'New post'};

var comments = [
    {postId: 4, content: 'awesome post'},
    {postId: 3, content: 'it was ok'},
    {postId: 4, content: 'neat'}
];

function commentsForPost(post, comments){
    return comments.filter(function(comment){
        return comment.postId === post.id;
    });
}

console.log(commentsForPost(post, comments));

var productz = [
    {name: 'coocumba', type: 'vetable', quantity: 0, price:1},
    {name: 'nana', type:'foot', quantity: 10, price:14},
    {name: 'celry', type:'vetable', quantity:30, price:13},
    {name: 'range', type:'foot', quantity:3, price:5}
];
var filProdx = productz.filter(function(product){
    return product.type === 'vetable' && product.quantity > 0 && product.price > 6;
});

console.log(filProdx);

var products = [
    {name: 'coocumba', type: 'vetable'},
    {name: 'nana', type:'foot'},
    {name: 'celry', type:'vetable'},
    {name: 'range', type:'foot'}
];

var filteredProducts = [];

for (var i=0; i<products.length; i++){
    if(products[i].type ==='foot'){
        filteredProducts.push(products[i]);
    }
}

console.log(filteredProducts);

var filtaProds = products.filter(function(product){
    return product.type === 'vetable';
});

console.log(filtaProds);