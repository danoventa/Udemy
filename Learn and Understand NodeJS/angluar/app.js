var express = require('express');
var app = express();

var port = process.env.PORT || 3001;

var people = [
    {
        name: 'Jose Doez'
    },
    {
        name: 'Julia Does'
    },
    {
        name: 'Jimmy Doeche'
    }
];


app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(request, response){
    response.render('index', {serverPeople: people});
});

app.listen(port);