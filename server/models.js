var Sequelize = require('sequelize');

var db = new Sequelize('sqlite://student_draw.db');

var Teacher = db.define('teacher', {
    // id (primary key) given to us supposedly
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING
});

var Class = db.define('class', {
    // id (primary key) given to us supposedly
    teacher: {
        type: Sequelize.INTEGER,
        references: {
            model: Teacher,
            key: 'id'
        }
    }
});

var Student = db.define('student', {
    // id (primary key) given to us supposedly
    name: Sequelize.STRING,
    drawing: Sequelize.STRING,
    class: {
        type: Sequelize.INTEGER,
        references: {
            model: Class,
            key: 'id'
        }
    },
    status: Sequelize.INTEGER
});

Teacher.sync({force: true}).then(function() {
    Class.sync({force: true}).then(function() {
        Student.sync({force: true});
    });
});

module.exports.Teacher = Teacher;
module.exports.Student = Student;
module.exports.Class = Class;
