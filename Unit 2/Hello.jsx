import React, { Component } from "react";
import Content from "./Content";

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0
    };

    this.setNewNumber = this.setNewNumber.bind(this);
    this.setSameNumber = this.setSameNumber.bind(this);
  }

  setNewNumber = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  setSameNumber = () => {
    this.setState({
      number: this.state.number
    });
  };

  // shouldComponentUpdate(newProps, newState) {
  //   return true;
  // }
  componentWillMount() {
    console.log("Parent Component will Mount");
  }
  componentDidMount() {
    console.log("Parent Component did Mount");
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Parent Component will Update");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Parent Component did Update");
  }
  componentWillUnmount() {
    console.log("Parent Component will Unmount");
  }
  render() {
    console.log("Parent rendered");
    return (
      <div>
        <button onClick={this.setNewNumber}>Increment</button>
        <Content myNumber={this.state.number}></Content>
        <button onClick={this.setSameNumber}>Assign same value</button>
      </div>
    );
  }
}

export default Hello;
