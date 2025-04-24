import React from "react";
import Main from "./components/Main";

import "./App.css";

export default function App() {
  return (
    <>
      <Main />
    </> // Elemento fragment, não cria nada, feito apenas para
    // retornar o que estiver dentro dele
  );
}
