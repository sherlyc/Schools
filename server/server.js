var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var schools = require("./routes/schools");
var app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public"));
app.use(cors({ origin: "*" }));

// Routes
app.use("/schools", schools);

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

module.exports = connection => {
  app.set("connection", connection);
  return app;
};
