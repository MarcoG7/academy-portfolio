import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Profile } from './section/profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Profile],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-project-marcgerges');
}
