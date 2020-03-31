import React, { Component } from "react";
// import FormTwo from "./formTwo";

class FormOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: null
    };
  }

  ChangeHandler = event => {
    let name = event.target.name,
      value = event.target.value;
    this.setState({ [name]: value });
  };

  SubmitHandler = event => {
    event.preventDefault();
    let age = this.state.age;
    if (!Number(age)) {
      alert("Age must be a number");
    }
  };

  render() {
    return (
      <form onSubmit={this.SubmitHandler}>
        <h2>Please enter details</h2>
        <p>Enter your name: </p>
        <input type="text" name="username" onChange={this.ChangeHandler} />
        <p>Enter your age: </p>
        <input type="text" name="age" onChange={this.ChangeHandler} />
        <br />
        <br />
        <input type="submit" />
        {/* <FormTwo /> */}
      </form>
    );
  }
}

export default FormOne;
