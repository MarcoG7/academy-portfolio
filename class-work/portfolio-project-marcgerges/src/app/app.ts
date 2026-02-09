import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Profile } from './section/profile/profile';
import { About } from './section/about/about';
import { Projects } from './section/projects/projects';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Profile, About, Projects],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-project-marcgerges');
}
