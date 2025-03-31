import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BugRecorderWrapper } from './react-wrapper';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BugRecorderWrapper],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-signup-app';
}
