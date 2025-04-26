import React, { Component } from "react";
import "./Main.css";

export default class Main extends Component {
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
    // const { newTask } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form action="#">
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Escreva sua tarefa"
          />
          <button type="submit">Adicionar</button>
        </form>
      </div>
    );
  }
}
