var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');

var port = process.env.PORT || 3000;
var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));
app.get('/', function(request, response){
    response.render('index');
});

app.get('/person/:id', function(request, response){
    response.render('person', {ID: request.params.id, Qstr: request.query.qstr});

});

app.post('/person', urlencodedParser, function(request, response){
    response.send('thank you!');
    console.log(request.body.firstname);
    console.log(request.body.lastname);
});

app.post('/personjson', jsonParser, function(request, response){
    response.send('Thank you for the JSON data!');
    console.log(request.body.firstname);
    console.log(request.body.lastname);
});

app.get('/', function(request, response){
    response.send("")
});

app.get('/api', function(request, response){
    response.json({firstname:"john", lastname: "do"})
});

app.listen(port);

