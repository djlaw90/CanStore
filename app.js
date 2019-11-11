var express = require('express');
var path = require('path');
var app  = express();

app.use(express.static('public'));
app.use(express.static('can-style.css'));
app.use(express.static('can-script.js'));

app.get('/',function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(path.normalize(__dirname + '/index.html'));
});

app.get('/products',function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(path.normalize(__dirname + '/public/products.json'));
});

app.listen(3000);
