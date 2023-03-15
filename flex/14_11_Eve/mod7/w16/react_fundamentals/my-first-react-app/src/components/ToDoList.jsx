import { useState } from "react";

const ToDoList = (props) => {
  const [newTask, setNewTask] = useState("");
  const [toDos, setToDos] = useState([]);

  const newTaskFieldChanged = (event) => {
    const enteredValue = event.target.value;

    setNewTask(enteredValue);
  };

  const handleToDoFormSubmission = (event) => {
    event.preventDefault();
    setToDos((prev) => {
      return [...prev, newTask];
    });

    setNewTask("");
  };
  return (
    <>
      <h2>{"To-Do List Component" || props.heading}</h2>
      <form onSubmit={handleToDoFormSubmission}>
        <label htmlFor="new-task">Enter Task:</label>
        <input
          id="new-task"
          type="text"
          onChange={newTaskFieldChanged}
          value={newTask}
        />
        <input type="submit" value="Add Task to List" />
      </form>
      {toDos.length === 0 && <p>There are no to-do items to display</p>}
      {toDos.length > 0 && (
        <ul>
          {toDos.map((toDo, index) => (
            <li key={index}>{toDo}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ToDoList;
