import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { text } from 'stream/consumers';


@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  links = [{text:'linkedin',link:'https://www.linkedin.com/in/pericles-barreto-de-morais/'},{text:'github',link: 'https://github.com/pericles81'}];
}