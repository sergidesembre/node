var express = require('express');
var MongoClient = require('mongodb').MongoClient;

var app = express();


MongoClient.connect("mongodb://mongo:27017/users", function(err, db) {
    if(err) {
        console.log("Error connecting to mongodb");
    }
});

app.get('/', function(req, res){
    res.send("Hello World");
});
app.listen(3000, function(){
    console.log('listening on port 3000!');
});
