import React, { Component } from 'react';
import { ajax } from './helpers';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: null
    };
  }
  
  submit() {
    ajax("POST", "/api/login", "json",
         function() {
           
         }.bind(this),
         function(err) {
           this.setState({error: "Invalid username or password. Login failed."});
         }.bind(this),
	 JSON.stringify({
	   email: this.state.email,
	   password: this.state.password
	 })
    );
  }

  render () {
    let errorBox = null;
    if (this.state.error) {
      errorBox = (<div className="toast toast-danger main-form-toast">
  {this.state.error}
      </div>)
    }
    return (
      <div>
        {errorBox}
        <div className="card main-form-card">
          <div className="card-header">
            <h4 className="card-title">Teacher Login</h4>
            <h4 className="card-meta">Welcome to DLP.</h4>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label className="form-label" htmlFor="input-name">Email</label>
              <input className="form-input" type="text" id="input-name" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="input-name">Password</label>
              <input className="form-input" type="password" id="input-name" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary" onClick={() => this.submit()}>Login</button>
          </div>
        </div>  
      </div>
    );
  }
}
