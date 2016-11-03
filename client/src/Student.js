import React, { Component } from 'react';
import './Student.css';
import 'spectre.css/dist/spectre.min.css';

class Student extends Component {
    render() {
        return (
            <div className="card main-form-card">
                <div className="card-header">
                    <h4 className="card-title">Start</h4>
                    <h4 className="card-meta">To start, enter your name.</h4>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label className="form-label" htmlFor="input-name">Name</label>
                        <input className="form-input" type="text" id="input-name" />
                    </div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </div>
        );
    }
}

export default Student;
