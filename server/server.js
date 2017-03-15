var Express = require("express");
var Session = require("express-session");
var Http = require("http");
var BodyParser = require('body-parser');
var Bcrypt = require('bcrypt');

const SALT_ROUNDS = 12;

var app = Express();
var server = Http.createServer(app);
var router = Express.Router();

router.use(BodyParser.json({type: function() { return true; } }));

app.use(Session({
  secret: "verysecretfordebuggingonly",
  resave: false,
  saveUninitialized: true
}));

var models = require('./models');

router.post("/student", function(req, res) {
  var b = req.body;
  if (b.name && b.drawing && b.class) {
    models.Student.create({
      name: b.name,
      drawing: b.drawing,
      class: b.class,
      status: 0
    }).then(function(student) {
      console.log("created student " + student.id);
      res.send();
    });
  } else {
    res.status(400).send("Improper student request.");
  }
});

router.post("/teacher", function(req, res) {
  var b = req.body;
  if (b.name && b.email && b.password) {
    if (b.email.endsWith("@college.harvard.edu")) {
      Bcrypt.hash(b.password, SALT_ROUNDS, function(pwhashErr, pwhash) {
	if (pwhashErr) {
	  console.log("Password hashing failed.");
	  res.status(500).send("Password hashing failed.");
	} else {
	  models.Teacher.create({
	    name: b.name,
	    email: b.email,
	    password: pwhash
	  }).then(function(teacher) {
	    console.log("created teacher " + teacher.id);
	    res.send();
	  })
	}
      })
    } else {
      res.status(400).send("Invalid email.");
    }
  } else {
    res.status(400).send("Improper teacher request.");
  }
});

router.post("/class", function(req, res) {
  var teacherId = req.session.loggedInTeacher;
  if (teacherId) {
    models.Class.create({
      teacher: teacherId
    }).then(function(cl) {
      res.send()
    })
  } else {
    res.status(401).send("Need to login as teacher.");
  }
});

router.post("/login", function(req, res) {
  var b = req.body;
  if (b.email && b.password) {
    models.Teacher.findOne({
      where: {
	email: b.email
      }
    }).then(function(teacher) {
      if (teacher) {
	Bcrypt.compare(b.password, teacher.password,
		       function(pwhashErr, pwValid) {
		         if (pwhashErr) {
			   res.status(500).send("Password hashing failed.");
		         } else if (pwValid) {
			   req.session.loggedInTeacher = teacher.id;
			   res.send();
		         } else {
			   res.status(400).send("Invalid email or password.");
		         }
		       })
      } else {
	res.status(400).send("Invalid email or password.");
      }
    })
  } else {
    res.status(400).send("Improper request for login.");
  }
});

router.get("/class/:classId/students", function(req, res) {
  var teacherId = req.session.loggedInTeacher;
  if (!teacherId) {
    return res.status(401).send("Need login as teacher.");
  }
  
  var classId = parseInt(req.params.classId, 10);
  if (classId) {
    models.Student.findAll({
      attributes: ["id", "name", "status"],
      where: {
	class: classId
      }
    }).then(function(students) {
      res.send(JSON.stringify(students));
    });
  } else {
    res.status(400).send("Invalid class id.");
  }
});

router.get("/student/:studentId", function(req, res) {
  var teacherId = req.session.loggedInTeacher;
  if (!teacherId) {
    return res.status(401).send("Need login as teacher.");
  }

  var studentId = parseInt(req.params.studentId, 10);
  if (studentId) {
    models.Student.findById(studentId).then(function(student) {
      res.send(JSON.stringify(student));
    })
  } else {
    res.status(400).send("Invalid student id.");
  }
});

router.post("/student/:studentId", function(req, res) {
  var teacherId = req.session.loggedInTeacher;
  if (!teacherId) {
    return res.status(401).send("Need login as teacher.");
  }

  var studentId = parseInt(req.params.studentId, 10);
  if (studentId) {
    var b = req.body;
    delete b.id;  // ensure no id updates
    models.Student.update(b, {
      where: {
	id: studentId
      }
    }).then(function(student) {
      res.send();
    });
  } else {
    res.status(400).send("Invalid student id.")
  }
});

router.post("/remove/student/:studentId", function(req, res) {
  var teacherId = req.session.loggedInTeacher;
  if (!teacherId) {
    return res.status(401).send("Need login as teacher.");
  }

  var studentId = parseInt(req.params.studentId, 10);
  if (studentId) {
    models.Student.destroy({
      where: {
	id: studentId
      }
    }).then(function(student) {
      res.send();
    });
  } else {
    res.status(400).send("Invalid student id.")
  }
});

app.use("/api", router);
server.listen(3001);
