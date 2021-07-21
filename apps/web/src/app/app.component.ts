import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Message } from '@nx-docker-sandbox/api-interfaces';

@Component({
  selector: 'nx-docker-sandbox-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web';
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
