import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Todo } from '../../Todo';
import { randomUUID } from 'crypto';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  todoForm: FormGroup;
  todo : Todo;

  @Output() addTodo : EventEmitter<Todo>  = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      desc: ['', [Validators.required, Validators.minLength(5)]]
    });
    this.todo = new Todo(5, 'x', 'x', true);
    
  }

  onSubmit(): void {
    if (this.todoForm.valid) {
      const todoData = this.todoForm.value;
      this.todo = new Todo(5, todoData.title, todoData.desc, true);
      this.addTodo.emit(this.todo);
    }
  }
}

