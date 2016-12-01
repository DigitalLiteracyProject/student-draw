var Express = require("express");
var Http = require("http");
var BodyParser = require('body-parser');

var app = Express();
var server = Http.createServer(app);
var router = Express.Router();

router.use(BodyParser.json());

var models = require('./models');

console.log(models.Student);

router.post("/student", function(req, res) {
    var b = req.body;
    console.log(b);
    if (b.name && b.drawing && b.class) {
	models.Student.create({
	    name: b.name,
	    drawing: b.drawing,
	    class: b.class,
	    status: 0
	}).then(function(student) {
	    console.log("created student " + student.id)
	});
    } else {
	req.status(400).send("Improper student request.");
    }
});

router.get("/student/:studentId", function(req, res) {
    models.Student.findById(req.params.studentId)
	  .then(function(student) {
	      req.send(student);
	  });
});

app.use("/api", router);
server.listen(3001);
