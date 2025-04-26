import React, { Component } from "react";
import "./Tasks.css";

export default class Tasks extends Component {
  state = {
    tasks: [
      "a",
      "Você ainda não adicionou nenhuma tarefa. Você ainda não adicionou nenhuma tarefa.",
    ],
  };

  render() {
    const { tasks } = this.state;

    return (
      <>
        {tasks.length > 0 ? (
          <h2>Clique em qualquer tarefa para apagá-la</h2>
        ) : (
          <></>
        )}
        <ul className="tasks">
          {tasks.length > 0 ? (
            tasks.map((task) => <li>{task}</li>)
          ) : (
            <h2>Você ainda não adicionou nenhuma tarefa.</h2>
          )}
        </ul>
      </>
    );
  }
}
