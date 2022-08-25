import React from 'react';

import { TodoCounter } from '../TodoCounter/index.jsx'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton/index.jsx'


function AppIU({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo
}) {
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
          onCompleted={() => completeTodo(todo.text)} 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          onDelete={() => deleteTodo(todo.text)} /> 
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export { AppIU };