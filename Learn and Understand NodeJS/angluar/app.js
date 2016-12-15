var express = require('express');
var app = express();

var port = process.env.PORT || 3001;

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(request, response){
    response.render('index');
});

app.listen(port);