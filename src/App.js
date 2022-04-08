// --- Root component --- \\

import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import { nanoid } from "nanoid";

// JS object that contains functions as values, to relate names to functions to be used to filter the tasks data array
// Defined outside of App() so that they are not recalculated every time the <App /> component re-renders
// This info will also never change no matter what the app does b/c it is outside of it
const FILTER_MAP = {
  All: () => true, // The All filter shows all tasks, so return true for all tasks
  Active: (task) => !task.completed, // The Active filter shows tasks whose completed prop is false
  Completed: (task) => task.completed, // The Completed filter shows tasks whose completed prop is true
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

// Function to pass data from parent to child (App to Form)
function App(props) {
  const [tasks, setTasks] = useState(props.tasks); // setTasks is a hook to use in addTask() function; tasks is an array of objects
  const [filter, setFilter] = useState("All"); // Filter hook for reading and setting a filter

  function addTask(name) {
    // const newTask = { id: "id", name: name, completed: false }; // This has warning behind the scenes
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false }; // Fixed warning RE: 2 children w/ same key or IDs in DevTools console
    setTasks([...tasks, newTask]);
  }

  // Function to change the completed state in React when toggling a checkbox, not just in the browser (i.e., the bug)
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // If this task has the same ID as the edited task
      if (id === task.id) {
        // Use object spread to make a new object whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton key={name} name={name} isPressed={name === filter} setFilter={setFilter} />
  ));

  // Function to delete a task from state and UI
  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  // Function to edit a task
  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      // If this task has the same ID as the edited task
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;
  return (
    <div className="todoapp stack-large">
      <h1>React Todo List</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">{filterList}</div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
