var Express = require("express");
var Http = require("http");

var app = Express();
var server = Http.createServer(app);
var router = Express.Router();

var WebSocket = require("ws");
var wss = new WebSocket.Server({port: 3002});

wss.on("connection", function(sok) {
    console.log("WebSockets connection opened.");
    /*
     * you can access array of all clients in wss.clients to, for instance,
     * use wss.clients.forEach(function ...) to achieve effect of broadcast()
     */
    sok.on("message", function(message) {
        console.log("Received WebSockets message: " + message);
    });
});

app.use("/api", router);
server.listen(3001);
