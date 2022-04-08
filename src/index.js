import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
  { id: "todo-0", name: "Learn HTML", completed: true },
  { id: "todo-1", name: "Learn CSS", completed: true },
  { id: "todo-2", name: "Learn React", completed: false }
];

ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));