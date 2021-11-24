import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/card.model';

@Component({
  selector: 'app-doing',
  templateUrl: './doing.component.html',
  styleUrls: ['./doing.component.css']
})
export class DoingComponent implements OnInit {

  cardList!: Card[];

  constructor(
) { }

  ngOnInit(): void {
    
  }

}
