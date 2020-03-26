import React from "react";

class Hello extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0
    };

    this.setNewNumber = this.setNewNumber.bind(this);
  }

  setNewNumber() {
    this.setState({
      number: this.state.number + 1
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.setNewNumber}>Increment</button>
        <Content myNumber={this.state.number}></Content>
      </div>
    );
  }
}

class Content extends React.Component {
  componentWillMount() {
    console.log("Component will Mount");
  }
  componentDidMount() {
    console.log("Component did Mount");
  }
  // componentWillReceiveProps(newProps) {
  //   console.log("Component received props");
  // }
  // shouldComponentUpdate(newProps, newState) {
  //   return true;
  // }
  componentWillUpdate(nextProps, nextState) {
    console.log("Component will Update");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component did Update");
  }
  componentWillUnmount() {
    console.log("Component will Unmount");
  }
  render() {
    return (
      <div>
        <h2>{this.props.myNumber}</h2>
      </div>
    );
  }
}

export default Hello;
