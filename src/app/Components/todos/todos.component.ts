import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Todo } from '../../Todo';
import { TodoItemsComponent } from "../todo-items/todo-items.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemsComponent, AddTodoComponent], // Add CommonModule here
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[];
  id : number;
  constructor() {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      try {
        this.todos = JSON.parse(storedTodos) as Todo[];
        this.id = this.todos.length;
      } catch (e) {
        console.error('Failed to parse todos from localStorage', e);
        this.todos = [];
        this.id = 0;
      }
    } else {
      this.todos = [];
      this.id = 0;
    }
  }

  deleteTheTodo = (todo : Todo)=>{
    let index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo = (todo:Todo)=>{
    todo.id = this.id++;
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  markDoneTodo = (todo : Todo)=>{
    let index = this.todos.indexOf(todo);
    todo.active = !todo.active;
    this.todos[index] = todo;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
