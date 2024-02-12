import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {
  @Input()
  photo:string = 'https://bsfseeds.com/br/wp-content/uploads/sites/6/2020/04/shop_bg-header.png'

  @Input()
  title:string = ''

  @Input()
  text:string = ''

  ngOnInit(): void {
      
  }

}
