import React from "react";

import { TodoCounter } from "../TodoCounter/index.jsx";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/index.jsx";
import { TodoContext } from "../context/context";
import { Modal } from "../Modal/Modal";
import { TodoForm } from "../TodoForm/index.jsx";

import { TodosError } from "../TodosError/TodoError";
import { TodosLoading } from "../TodosLoading/TodoLoading";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos";

function AppIU() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodosError />}
        {loading && <TodosLoading />}
        {!loading && !searchedTodos.length && <EmptyTodos />}
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
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}

export { AppIU };
