import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo'; // Adjust path if needed
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'] 
})


export class TodoItemsComponent {
[x: string]: any;
  @Input() todo!: Todo; 
  @Output() deleteTodo : EventEmitter<Todo> = new EventEmitter();
  @Output() markDoneTodo : EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  onClick = (todo: Todo)=>{
    this.deleteTodo.emit(todo);
  }

  markDone = (todo : Todo)=>{
    this.markDoneTodo.emit(todo);
  }
}
