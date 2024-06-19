import React from "react";

class CounterClass extends React.Component {
  constructor() {
    super();
    this.increment = this.increment.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      number: 0,
    };
  }

  increment() {
    this.setState({
      number: ++this.state.number,
      // number: this.state.number + 1
    });
  }

  reset() {
    this.setState({
      // number: 0
      number: (this.state.number = 0),
    });
  }

  render() {
    return (
      <div>
        <h1>Component Class</h1>
        <h2>Counter = {this.state.number} </h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default CounterClass;
