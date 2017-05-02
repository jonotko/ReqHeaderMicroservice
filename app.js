var express = require("express");

var app = express();

app.get("/", function(req, res){
   res.send("Jonathan's Req Header Parser Microservice "); 
});


app.get("/whoami", function(req, res) {
   res.send("you'll soon find out who you are"); 
});

app.listen(process.env.PORT, function(){
    console.log("Server is now running......");
});