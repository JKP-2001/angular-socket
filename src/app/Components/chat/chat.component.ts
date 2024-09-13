import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebSocketService } from '../../websocket.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  standalone: true, // Indicates that this is a standalone component
  imports: [FormsModule, CommonModule] // Import FormsModule and CommonModule
})
export class ChatComponent implements OnInit {
  messages: string[] = [];
  messageInput: string = '';
  private messageSubscription: Subscription | undefined;

  constructor(private webSocketService: WebSocketService, public toastr:ToastrService) {}

  ngOnInit(): void {
    this.webSocketService.connectSocket();
    // this.messageSubscription = this.webSocketService.getMessages().subscribe({
    //   next: (message: string) => this.messages.push(message),
    //   error: (err) => console.error('WebSocket error: ', err)
    // });
  }

  // ngOnDestroy(): void {
  //   this.messageSubscription?.unsubscribe(); // Safely unsubscribe
  //   this.webSocketService.close(); // Close WebSocket connection
  // }

  sendMessage(): void {
    
      // const message = `broadcast: Hello Google`; // Adjust message format as needed
      const message = `private:${"916a-4f28-4e15-a427-45c3-214895"}:Message to you only`
      this.webSocketService.sendMessage(message);
      this.messageInput = ''; 
      this.showSuccess(message);// Clear input after sending
    
  }

  // // Optionally, add a method to handle form submission if using a form
  // onSubmit(event: Event): void {
  //   event.preventDefault(); // Prevent form submission from reloading the page
  //   this.sendMessage();
  // }

  

  showSuccess(message : string) {
    this.toastr.success(message, 'Incoming Message', {
      timeOut: 3000,
    });
  }
  showError() {
    this.toastr.error('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
  }
  showInfo() {
    this.toastr.info('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
  }
  showWarning() {
    this.toastr.warning('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
  }


}
