import { useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../context/context";

function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);

  return (
    <h2 className="TodoCounter">
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
}

export { TodoCounter };
