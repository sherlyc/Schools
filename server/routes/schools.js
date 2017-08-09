var express = require("express");
var router = express.Router();

var db = require("../db");

router.get("/", function(req, res) {
  //select all schools
  db
    .getSchools(req.app.get("connection"))
    .then(function(schools) {
      res.json({ schools: schools });
    })
    .catch(function(err) {
      res.status(500).send("DATABASE ERROR: " + err.message);
    });
});

router.get("/:id", function(req, res) {
  //select single school
  db
    .getSchool(req.params.id, req.app.get("connection"))
    .then(function(school) {
      res.json({ school: school });
    })
    .catch(function(err) {
      res.status(500).send("DATABASE ERROR: " + err.message);
    });
});

router.post("/add", function(req, res) {
  //create school
  db
    .addSchool(req.body, req.app.get("connection"))
    .then(function(result) {
      res.sendStatus(201);
    })
    .catch(function(err) {
      res.status(500).send("DATABASE ERROR: " + err.message);
    });
});

router.put("/edit/:id", function(req, res) {
  //update school
  db
    .updateSchool(req.params.id, req.body, req.app.get("connection"))
    .then(function(result) {
      res.sendStatus(202);
    })
    .catch(function(err) {
      res.status(500).send("DATABASE ERROR: " + err.message);
    });
});

router.delete("/remove/:id", function(req, res) {
  //remove school
  db
    .delSchool(req.params.id, req.app.get("connection"))
    .then(function(result) {
      res.sendStatus(204);
    })
    .catch(function(err) {
      res.status(500).send("DATABASE ERROR: " + err.message);
    });
});

module.exports = router;
