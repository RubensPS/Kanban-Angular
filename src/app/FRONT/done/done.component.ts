import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/card.model';
import { CardService } from 'src/app/card.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  cardList!: Card[];

  constructor(
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.cardList = this.cardService.getList();
  }

}
