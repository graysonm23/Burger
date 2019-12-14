var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  res.redirect("/index");
});

router.get("/index", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
router.post("/burger/create", function(req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect("/index");
  });
});
router.post("/burger/eat/:id", function(req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect("/index");
  });
});

// Export routes for server.js to use.
module.exports = router;
