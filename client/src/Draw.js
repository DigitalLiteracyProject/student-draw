import React, {Component} from 'react';
import { ajax } from './helpers';

export default class Draw extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      name: null
    };
  }

  componentWillMount() {
    ajax("GET", "/api/class/" + this.props.params.classId + "/students", "json",
         function(students) {
           var studentsToDraw =
             students.filter(function(s) { return s.status === 1 });
           this.setState({students: studentsToDraw});
         }.bind(this),
         function(err) {
           console.log(err);
         }.bind(this));
  }

  doDraw() {
    var randomIndex;
    var randomStudentName;
    randomIndex = Math.floor(Math.random() * this.state.students.length);
    randomStudentName = this.state.students[randomIndex].name;
    this.setState({
      name: randomStudentName
    });
  }

  render() {
    var innerComponent;
    if (this.state.name) {
      innerComponent =
        <DrawResult name={this.state.name} doDraw={() => this.doDraw()} />
    } else {
      innerComponent = <DrawButton doDraw={() => this.doDraw()} />
    }

    return (
      <div className="draw-container">
        {innerComponent}
      </div>
    );
  }
}

class DrawButton extends Component {
  render() {
    return (
      <button className="btn btn-primary draw-button" onClick={this.props.doDraw}>Draw</button>
    );
  }
}

class DrawResult extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <button className="btn btn-primary draw-button" onClick={this.props.doDraw}>Draw Again</button>
      </div>
    );
  }
}
