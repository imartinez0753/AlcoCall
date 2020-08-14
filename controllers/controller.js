var express = require("express");

var router = express.Router();

// Import the model burger.js) to use its database functions.
var userInfo = require("../models/userInfo.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  userInfo.all(function (data) {
    var object = {
      userInfo: data
    };
    console.log(object);
    res.render("index", object);
  });
});

module.exports = router;
