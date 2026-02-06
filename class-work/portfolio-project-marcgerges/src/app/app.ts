import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Profile } from './section/profile/profile';
import { About } from './section/about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Profile, About],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-project-marcgerges');
}
