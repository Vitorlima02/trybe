import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const listTask = ['Estudar', 'Trabalhar', 'Desenvolver', 'Relaxar', 'Dormir'];

class App extends React.Component {
  render() {
    return (
      <ul>{listTask.map(element => Task(element))}</ul>
    );
  }
  
}

export default App;
