// import './App.css';
import { TodoCounter } from './TodoCounter.js'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'
//import './App.css'

import React from 'react';


const todoDefault = [
  { text: 'Cortar Cebolla', completed: true},
  { text: 'Tomar curso', completed: false},
  { text: 'Llorar hasta la muerte, baby', completed: false}
]


function App() {
  const [todos, setTodos] = React.useState(todoDefault);

  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  };

  return (
    <div className='App'>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/> 
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;

