import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/card.service';
import { Card } from 'src/app/card.model';

@Component({
  selector: 'app-doing',
  templateUrl: './doing.component.html',
  styleUrls: ['./doing.component.css']
})
export class DoingComponent implements OnInit {

  cardList!: Card[];

  constructor(
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.cardList = this.cardService.getList();
  }

}
