import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./Components/todos/todos.component";
import { AddTodoComponent } from "./Components/add-todo/add-todo.component";
import { CommonModule } from '@angular/common';
import { ChatComponent } from "./Components/chat/chat.component";
import { NgToastModule } from 'ng-angular-popup';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent, AddTodoComponent, CommonModule, ChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list';


  // openModal(): void {
  //   const modalElement = document.getElementById('todoModal');
  //   if (modalElement) {
  //     const modal = new bootstrap.Modal(modalElement);
  //     modal.show();
  //   }
  // }

  // constructor(public toastr: ToastrService) { }

  // showSuccess() {
  //   this.toastr.success('everything is broken', 'Major Error', {
  //     timeOut: 3000,
  //   });
  // }
  // showError() {
  //   this.toastr.error('everything is broken', 'Major Error', {
  //     timeOut: 3000,
  //   });
  // }
  // showInfo() {
  //   this.toastr.info('everything is broken', 'Major Error', {
  //     timeOut: 3000,
  //   });
  // }
  // showWarning() {
  //   this.toastr.warning('everything is broken', 'Major Error', {
  //     timeOut: 3000,
  //   });
  // }
}
