import React from 'react';

import { AppIU } from './AppIU'


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

  /*--------------------------------*/

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

  /*--------------------------------*/

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  }

  /*--------------------------------*/

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  /*--------------------------------*/


  return (
    <AppIU 
    completedTodos={completedTodos} 
    totalTodos={totalTodos} 
    searchValue={searchValue} 
    setSearchValue={setSearchValue} 
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;

