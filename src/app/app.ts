import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from './main/main';
import { Resume } from './resume/resume';

@Component({
  selector: 'app-root',
  imports: [Main, Resume],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');
}
