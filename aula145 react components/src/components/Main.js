import React, { Component } from "react";
import "./Main.css";

export default class Main extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     newTask: "",
  //   };

  //   this.inuptChange = this.inuptChange.bind(this);
  // }
  state = {
    newTask: "",
  };

  handleChange = (event) => {
    // arrow function para que o this se
    // aplique na classe
    this.setState({
      newTask: event.target.value,
    });
  };

  render() {
    const { newTask } = this.state;

    return (
      <div className="main">
        <h1>To-do List</h1>
        <h2>{newTask}</h2>

        <form action="#">
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Write your task"
          />
          <button type="submit">Add task</button>
        </form>
      </div>
    );
  }
}
