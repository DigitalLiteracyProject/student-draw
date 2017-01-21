import React, { Component } from 'react';
import 'spectre.css/dist/spectre.min.css';
import { ajax } from './helpers';
import './ClassAdmin.css'

export default class ClassAdmin extends Component {
    constructor() {
        super();
        this.state = {
            students: []
        };
    }

    componentWillMount() {
        ajax("GET", "/api/class/" + this.props.params.classId + "/students", "json",
             function(students) {
		console.log(students);
                this.setState({students: students});
             }.bind(this),
             function(err) {
                console.log(err);
             }.bind(this));
    }
    
    render() {
        var genStudentCards = function(s) {
            return (<tr><td>{s.name}</td></tr>);
        }
        var queue = this.state.students.filter(function(s) { return s.status == 0; }).map(genStudentCards);
        var students = this.state.students.filter(function(s) { return s.status == 1; }).map(genStudentCards);

        return (
            <div className="container">
                <div className="columns">
                    <div className="col-5 card">
                        <div className="card-header">
                            <h4 className="card-title">Queue</h4>
                        </div>
                        <div className="student-list">
                            <table className="table table-striped table-hover">
                                <tbody>{queue}</tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-8 card">
                        <div className="card-header">
                            <h4 className="card-title">Students</h4>
                        </div>
                        <div className="student-list">
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
