var express = require("express");
var path = require("path");

var router = express.Router();

var userInfo = require("../models/userInfo.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  userInfo.all(function (data) {
    var object = {
      userInfo: data
    };
    console.log(object);
    res.sendFile(path.join(__dirname + "/../views/layout/", "signIn.html"));
    // res.render("index", object);
  });
});

router.get("/liquor_search.html", function (req, res) {
  res.sendFile(
    path.join(__dirname + "/../views/layout/", "liquor_search.html")
  );
  // res.render("index", object);
});

router.get("/bars.html", function (req, res) {
  res.sendFile(path.join(__dirname + "/../views/layout/", "bars.html"));
  // res.render("index", object);
});

router.get("/beerSearch.html", function (req, res) {
  res.sendFile(path.join(__dirname + "/../views/layout/", "beersearch.html"));
});

router.get("/random.html", function (req, res) {
  res.sendFile(path.join(__dirname + "/../views/layout/", "random.html"));
});

router.get("/AlcoholReferences.html", function (req, res) {
  res.sendFile(
    path.join(__dirname + "/../views/layout/", "AlcoholReferences.html")
  );
});

router.get("/index.html", function (req, res) {
  res.sendFile(path.join(__dirname + "/../views/layout/", "index.html"));
});
router.get("/signIn.html", function (req, res) {
  res.sendFile(path.join(__dirname + "/../views/layout/", "signIn.html"));
});

router.post("/api/userInfo", function (req, res) {
  // console.log(req.body);
  userInfo.create(
    ["userName", "DOB", "password"],
    [req.body.userName, req.body.DOB, req.body.password],
    function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

module.exports = router;
