var express = require("express");
var ip = require("ip");

var app = express();
var useragent = require('express-useragent');

app.use(useragent.express());

app.get("/", function(req, res){
   res.send("Jonathan's Req Header Parser Microservice "); 
});


app.get("/whoami", function(req, res) {
   var ipAddres =  req.ip;
   var os =  req.useragent.os;
   var language = req.headers["accept-language"].split(",")[0];
   
   var object = {
       ipaddress: ipAddres,
       language: language,
       software: os
   }
    
   res.send(object); 
});

app.listen(process.env.PORT, function(){
    console.log("Server is now running......");
});