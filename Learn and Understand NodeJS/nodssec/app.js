var fs = require('fs');

var groot = fs.readFileSync(__dirname + '/groot.txt', 'utf8');
console.log(groot);

var groot2 = fs.readFile(__dirname + '/groot.txt', 'utf8', function(err, data){
    console.log("STUUF" + data);
});
console.log("DONE");

// callbacks
function greet(callback){
    console.log('hello!');
    callback();
}
greet(function(){
    console.log('The callback was invoked');
});

greet(function(){
    console.log('A Different callback was invoked!');
});

// buffers

var buf = new Buffer('Hello', 'utf8');

console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('wo');
console.log(buf.toString);