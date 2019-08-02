var express = require("express");
var path = require('path')
var app = express();
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 8080;

require("./models/burger.js");
var routes = require("./controllers/burger_controller")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(routes)

// app.get("/", function(req, res) {
//     res.render("index");
//   });

 app.listen(process.env.PORT || 8080, function(){
   console.log("server running")
 })
 