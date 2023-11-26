import { makeAutoObservable } from "mobx";

class TodoStore {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo = (task) => {
    // Добавление новой задачи
    this.todos.push({ id: Date.now(), task, completed: false });
  };

  updateTodo = (id, updatedTask) => {
    // Обновление задачи по id
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);

    if (todoIndex !== -1) {
      this.todos[todoIndex].task = updatedTask;
    }
  };

  deleteTodo = (id) => {
    // Удаление задачи по id
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };

  completedTodo = (id) => {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);

    if (todoIndex !== -1) {
      this.todos[todoIndex].completed = !this.todos[todoIndex].completed;
    }
  };
}

const todoStore = new TodoStore();

export default todoStore;
