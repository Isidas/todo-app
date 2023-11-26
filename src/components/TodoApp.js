import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import todoStore from "../store/todo-store";

const TodoApp = observer(() => {
  const [newTask, setNewTask] = useState("");

  const handleAddTodo = () => {
    todoStore.addTodo(newTask);
    setNewTask("");
  };

  const handleUpdateTodo = (id, updatedTask) => {
    todoStore.updateTodo(id, updatedTask);
  };

  const handleDeleteTodo = (id) => {
    todoStore.deleteTodo(id);
  };

  return (
    <div>
      <ul>
        {todoStore.todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button
              onClick={() =>
                handleUpdateTodo(todo.id, prompt("Update task:", todo.task))
              }
            >
              Update
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
});

export default TodoApp;
