/**
 * Created by danny on 12/9/2016.
 */

var http = require('http');
var fs = require('fs');


http.createServer(function(request, response){

    response.writeHead(200, {"Content-Type" : "text/html"});
    var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    fs.createReadStream(__dirname + '/index.html').pipe(response);
}).listen(1337, '127.0.0.1');

