import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/card.model';
import { CardService } from 'src/app/card.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  cardList!: Card[];
  
  constructor(
    private cardService: CardService
  ) {}

  ngOnInit(): void {
    this.cardList = this.cardService.getList();
  }

  createCard() {
  }
}
