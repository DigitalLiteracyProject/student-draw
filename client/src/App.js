import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="top-bar">
          <h1>DLP Draw</h1>
        </div>
        <div className="main-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export class PromptClass extends Component {
  render() {
    return (
      <p>No class yet</p>
    );
  }
}

