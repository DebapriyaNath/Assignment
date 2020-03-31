import React, { Component } from "react";

class FormTwo extends Component {
  state = {
    make: "Ford"
  };
  render() {
    return (
      <form>
        <h1>Hello {this.props.username}</h1>
        <div className="Div">
          <div className="Name">
            <h2>Vehicle Make: </h2>
            <select value={this.state.make}>
              <option value="Chev">Chevrolet</option>
              <option value="Ford">Ford</option>
              <option value="Hond">Honda</option>
              <option value="Hyun">Hyundai</option>
            </select>
          </div>

          <div className="Car">
            <h2>Vehicle Number: </h2>
            <input
              type="text"
              name="vehnum"
              onChange={this.props.ChangeHandler}
            />
          </div>
          <br />
          <input type="submit" onClick={this.props.SubmitHandler} />
        </div>
      </form>
    );
  }
}

export default FormTwo;
