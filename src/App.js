// import './App.css';
import { TodoCounter } from './TodoCounter.js'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'

import React from 'react';


const todo = [
  { text: 'Cortar Cebolla', completed: false},
  { text: 'Tomar curso', completed: false},
  { text: 'Llorar', completed: false}
]

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todo.map(todo => (
          <TodoItem key={todo.text} text={todo.text} /> 
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
