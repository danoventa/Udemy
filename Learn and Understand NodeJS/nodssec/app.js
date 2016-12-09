var fs = require('fs');
var zlib = require('zlib');

var readables = fs.createReadStream(__dirname + '/groot.txt');
var writeables = fs.createWriteStream(__dirname + '/grootcopy.txt');
var compressables = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzip = zlib.createGzip();

readables.pipe(writeables);
readables.pipe(gzip).pipe(compressables);

var readable = fs.createReadStream(__dirname +
'/groot.txt');

readable.on('data', function(chunk){
    console.log(chunk);
})


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