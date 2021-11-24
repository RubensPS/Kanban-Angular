import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/card.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  cardList!: Card[];
  
  constructor() {}

  ngOnInit(): void {
   
  }

  createCard() {
  }
}
