import React, { Component } from 'react';
import { ajax } from './helpers';

export default class ClassAdmin extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
  }

  componentWillMount() {
    ajax("GET", "/api/class/" + this.props.params.classId + "/students", "json",
         function(students) {
           this.setState({students: students});
         }.bind(this),
         function(err) {
           console.log(err);
         }.bind(this));
  }

  addStudent(studentId) {
    ajax("POST", "/api/student/" + studentId, "json",
         function() {},
         function(err) {console.log(err);},
         JSON.stringify({
           status: 1
         })
    );
    this.componentWillMount();
  }

  removeStudent(studentId) {
    ajax("POST", "/api/remove/student/" + studentId, "json",
         function() {},
         function(err) {console.log(err);},
         JSON.stringify({})
    );
    this.componentWillMount();
  }
  
  render() {
    var addStudent = this.addStudent.bind(this);
    var removeStudent = this.removeStudent.bind(this);
    
    var genStudentCardsQueue = function(s) {
      let approveButton;
      let removeButton;
      approveButton = <button className="btn btn-primary" onClick={() => addStudent(s.id)}>Approve</button>;
      removeButton = <button className="btn btn-primary" onClick={() => removeStudent(s.id)}>Remove</button>;
      return (
        <tr>
          <td>
            {s.name}
          </td>
          <td className="class-admin-queue-td">
            <div className="btn-group">
              {approveButton}
              {removeButton}
            </div>
          </td>
        </tr>
      );
    }
    
    var genStudentCardsStudents = function(s) {
      return (
        <tr>
          <td>
            {s.name}
          </td>
        </tr>
      );
    }
    
    var queue = this.state.students.filter(function(s) { return s.status === 0; }).map(genStudentCardsQueue);
    var students = this.state.students.filter(function(s) { return s.status === 1; }).map(genStudentCardsStudents);

    return (
      <div className="container">
        <div className="columns">
          <div className="col-6 card">
            <div className="card-header">
              <h4 className="card-title">Queue</h4>
            </div>
            <div className="class-admin-student-list">
              <table className="table table-striped table-hover">
                <tbody>{queue}</tbody>
              </table>
            </div>
          </div>
          <div className="col-6 card">
            <div className="card-header">
              <h4 className="card-title">Students</h4>
            </div>
            <div className="class-admin-student-list">
              <table className="table table-striped table-hover">
                <tbody>{students}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
