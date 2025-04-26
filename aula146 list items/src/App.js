import React from "react";
import Main from "./components/Main";
import Tasks from "./components/Tasks";

import "./App.css";

export default function App() {
  return (
    <>
      <Main />
      <Tasks />
    </> // Elemento fragment, não cria nada, feito apenas para
    // retornar o que estiver dentro dele
  );
}
