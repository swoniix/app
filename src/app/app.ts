import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from './main/main';
import { Resume } from './resume/resume';
import { Exper } from './exper/exper';
import { Links } from './links/links';

@Component({
  selector: 'app-root',
  imports: [Main, Resume,Exper,Links],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');
}
