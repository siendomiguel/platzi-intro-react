import React from "react";

import { TodoCounter } from "../TodoCounter/index.jsx";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/index.jsx";
import { TodoContext } from "../context/context";

function AppIU() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo } =
    React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Hubo un error</p>}
        {loading && <p>Cargando datos . . .</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer item</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            onCompleted={() => completeTodo(todo.text)}
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export { AppIU };
