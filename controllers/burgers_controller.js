var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  res.redirect("/index");
});

router.get("/index", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
router.post("/burger/create", function(req, res) {
  burger.create(["burger_name"], [req.body.burger_name], function() {
    res.redirect("/");
  });
});
router.put("/burger/eat/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function() {
      res.redirect("/");
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
