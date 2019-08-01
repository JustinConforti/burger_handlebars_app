var express = require("express");

var app = express();
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 8080;

var db = require("./models");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));


app.get("/", function(req, res) {
    res.render("index");
  });

  db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
 