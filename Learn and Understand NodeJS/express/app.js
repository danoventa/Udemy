var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(request, response){
    response.send("<html><head><body><h1>Hellow Woors!</h1></body></head></html>")
});

app.get('/api', function(request, response){
    response.json({firstname:"john", lastname: "do"})
});

app.get('/person/:id', function(request, response){
    response.send("<html><head><body><h1>Person: " + request.params.id + "</h1></body></head></html>")
});

app.listen(port);

