import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  public socket: WebSocket | undefined;

  private isBrowser: boolean;
  private userId : string = "";

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.initializeSocket();
    } else {
      console.log("Running on the server-side");
    }
  }


  private generateRandomId(): string {
    // Simple random ID generation. You might use a more robust method.
    return 'xxxx-xxxx-4xxx-yxxx-xxxx-xxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  private initializeSocket(): void {
    try {
      this.userId = this.generateRandomId();
      const url = `ws://localhost:8081/ws/chat?userId=${this.userId}`;
      this.socket = new WebSocket(url);
      
      console.log({userId: this.userId})
      this.socket.onopen = () => {
        if(this.socket){
          console.log("WebSocket Connected Successfully");
        }
      };

      this.socket.onmessage = (event) => {
        console.log({event})
        console.log("Message from server ", event.data);
        alert("Message from server "+ event.data);
      };

      this.socket.onclose = () => {
        console.log("WebSocket Connection Closed");
      };

      this.socket.onerror = (error) => {
        console.error("WebSocket Error: ", error);
      };

    } catch (error) {
      console.error("WebSocket Initialization Error: ", error);
    }
  }

  public connectSocket(): void {
    if (this.socket) {
      this.socket.onopen = () => {
        console.log("WebSocket Connected Successfully");
      };
    } else {
      console.log("WebSocket is not initialized");
    }
  }

  public sendMessage(message: string): void {
    console.log({message})
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
      console.log("Message sent: ", message);
    } else {
      console.log("WebSocket is not open. Message not sent.");
    }
  }

}
