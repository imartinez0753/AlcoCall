var express = require("express");
var path = require("path");

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
    res.sendFile(path.join(__dirname + "/../views/layout/", "index.html"));
    // res.render("index", object);
  });
});
router.get("/liquor_search.html", function (req, res) {
  userInfo.all(function (data) {
    var object = {
      userInfo: data
    };
    console.log(object);
    res.sendFile(
      path.join(__dirname + "/../views/layout/", "liquor_search.html")
    );
    // res.render("index", object);
  });
});

router.get("/bars.html", function (req, res) {
  userInfo.all(function (data) {
    var object = {
      userInfo: data
    };
    console.log(object);
    res.sendFile(path.join(__dirname + "/../views/layout/", "bars.html"));
    // res.render("index", object);
  });
});

router.get("/beerSearch.html", function (req, res) {
  userInfo.all(function (data) {
    var object = {
      userInfo: data
    };
    console.log(object);
    res.sendFile(path.join(__dirname + "/../views/layout/", "beersearch.html"));
    // res.render("index", object);
  });
});

router.get("/random.html", function (req, res) {
  userInfo.all(function (data) {
    var object = {
      userInfo: data
    };
    console.log(object);
    res.sendFile(path.join(__dirname + "/../views/layout/", "random.html"));
    // res.render("index", object);
  });
});

router.get("/AlcoholReferences.html", function (req, res) {
  userInfo.all(function (data) {
    var object = {
      userInfo: data
    };
    console.log(object);
    res.sendFile(
      path.join(__dirname + "/../views/layout/", "AlcoholReferences.html")
    );
    // res.render("index", object);
  });
});

router.get("/index.html", function (req, res) {
  userInfo.all(function (data) {
    var object = {
      userInfo: data
    };
    console.log(object);
    res.sendFile(path.join(__dirname + "/../views/layout/", "index.html"));
    // res.render("index", object);
  });
});

module.exports = router;
