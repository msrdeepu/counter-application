import React from "react";
import { Component } from "react";
import "./App.css";

class App extends Component {
  state = { count: 0 };

  onIncrement = () => {
    this.setState((prevState) => {
      console.log(`Previous State Value ${prevState.count}`);
      return { count: prevState.count + 1 };
    });
  };

  onDecrement = () => {
    this.setState((prevState) => {
      console.log("decrement clicked");
      return { count: prevState.count - 1 };
    });
  };

  render() {
    const { count } = this.state;
    // const { count } = this.props;
    return (
      <div className="main-container">
        <h1 className="mainTitle">Counter App</h1>
        <h1 className="counterValue">{count}</h1>
        <div className="button-container">
          <button className="increase button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="decrease button" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
      </div>
    );
  }
}

export default App;
