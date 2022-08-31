import React from "react";

import { AppIU } from "./AppIU";
import { TodoProvider } from "../context/context";

const todoDefault = [
  { text: "Cortar Cebolla", completed: true },
  { text: "Tomar curso", completed: false },
  { text: "Llorar hasta la muerte, baby", completed: false },
];

function App() {
  return (
    <TodoProvider>
      <AppIU />
    </TodoProvider>
  );
}

export default App;
