import { Component, OnInit } from '@angular/core';
import { Card } from '../card.model';
import { CardService } from '../card.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FRONTComponent implements OnInit {

  cardList!: Card[];

  constructor(
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.cardList = this.cardService.getList();
  }

}
