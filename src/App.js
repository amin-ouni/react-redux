import React from 'react';
import './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filters from './Filters';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
      <Filters />
    </div>
  );
}

export default App;