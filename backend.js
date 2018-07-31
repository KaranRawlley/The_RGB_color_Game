var express = require("express");
var app = express();

app.use(express.static("css"));
app.use(express.static("js"));


app.get('/',function(req,res){
	res.render("../rgbcolorgame.ejs")
})

app.listen(3000,function(){
	console.log("Server started");
})