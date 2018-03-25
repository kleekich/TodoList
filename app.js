var express = require("express");
var app = express();

app.use(express.static('assets'));

app.get("/", function(req, res){
	res.sendFile("index.html");
})

var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log("Server started at port: " + port);
})