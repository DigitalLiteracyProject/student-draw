var Express = require("express");
var Http = require("http");

var app = Express();
var server = Http.createServer(app);
var router = Express.Router();

var models = require('./models');

app.use("/api", router);
server.listen(3001);
