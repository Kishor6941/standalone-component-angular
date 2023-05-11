import { Component } from '@angular/core';
import { CompletedTaskComponent } from './completed-task/completed-task.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [CommonModule,CompletedTaskComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng16standalone';
}
