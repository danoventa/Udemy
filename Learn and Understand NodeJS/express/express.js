/**
 * Created by danny on 12/10/2016.
 */

var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hellow Woord');
});

