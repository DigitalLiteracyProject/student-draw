import React, {Component} from 'react';

export default class Draw extends Component {
  constructor() {
    super();
    this.state = {
      name: null
    };
  }

  doDraw() {
    this.setState({
      name: "Brian Sapozhnikov"
    });
  }

  render() {
    var innerComponent;
    if (this.state.name) {
      innerComponent = <DrawResult name={this.state.name} />
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
      <h1>{this.props.name}</h1>
    );
  }
}
