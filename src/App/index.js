import React from 'react';

import { AppIU } from './AppIU'


const todoDefault = [
  { text: 'Cortar Cebolla', completed: true},
  { text: 'Tomar curso', completed: false},
  { text: 'Llorar hasta la muerte, baby', completed: false}
]


function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  /*--------------------------------*/


  const [todos, setTodos] = React.useState(parsedTodos);

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

    // Creamos la función en la que actualizaremos nuestro localStorage
    const saveTodos = (newTodos) => {
      // Convertimos a string nuestros TODOs
      const stringifiedTodos = JSON.stringify(newTodos);
      // Los guardamos en el localStorage
      localStorage.setItem('TODOS_V1', stringifiedTodos);
      // Actualizamos nuestro estado
      setTodos(newTodos);
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

