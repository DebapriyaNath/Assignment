import React, { Component } from "react";

class Content extends Component {
  shouldComponentUpdate(newProps, newState) {
    return newProps.myNumber !== this.props.myNumber;
  }
  componentWillMount() {
    console.log("Child Component will Mount");
  }
  componentDidMount() {
    console.log("Child Component did Mount");
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Child Component will Update");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Child Component did Update");
  }
  componentWillUnmount() {
    console.log("Child Component will Unmount");
  }
  render() {
    console.log("Child rendered");
    return (
      <div>
        <h2>{this.props.myNumber}</h2>
      </div>
    );
  }
}

export default Content;
