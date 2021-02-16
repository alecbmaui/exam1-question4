 //jshint esversion:6

// fill in your code here...
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){
  var r = Number(req.body.n1);
  var circumference = 2 * r * Math.PI;
  var area = r * r * Math.PI
  res.send("The circumference of the circle is: " + circumference.toFixed(2) + " and the area is: " + area.toFixed(2));
})

//this gets the response from the web page to this placeholder

app.listen(3000, function() {
  console.log ("Server is running on port 3000")
});