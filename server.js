//?Requiring the express module
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;

//?Using static direcory for CSS
app.use(express.static(path.join(__dirname, "public")));

//?Using the middlewares to grab the data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//?Listen to open PORT
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
