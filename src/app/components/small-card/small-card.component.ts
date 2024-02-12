import { Component, OnInit} from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

interface Card {
  id: number;
  photo: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {
  
  contents: Card[] = [];

  ngOnInit(): void {
    this.contents = [
      { id: 1, photo: 'https://images.habbo.com/web_images/habbo-web-articles/lpromo_2024usersurvey.png',title: 'Título 1',text: 'Conteúdo 1' },
      { id: 2, photo: 'https://images.habbo.com/web_images/habbo-web-articles/lpromo_gen15_10.png',title: 'Título 2',text: 'Conteúdo 2' },
      { id: 3, photo: 'https://images.habbo.com/web_images/habbo-web-articles/lpromo_collectibles.png',title: 'Título 3',text: 'Conteúdo 3' },

    ];
  }
}