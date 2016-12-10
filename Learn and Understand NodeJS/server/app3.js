/**
 * Created by danny on 12/9/2016.
 */

var http = require('http');
var fs = require('fs');


http.createServer(function(request, response){

    response.writeHead(200, {"Content-Type" : "application/json"});
    var obj = {
        firstname: 'John',
        lastname: 'Dod'
    };
    response.end(JSON.stringify(obj));
}).listen(1337, '127.0.0.1');

