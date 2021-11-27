import { Component, Input, OnInit } from '@angular/core';
import { CardID } from 'src/cardId.model';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  @Input() todoTaskList!: CardID[];
  task!: CardID;

  constructor() {}

  ngOnInit(): void { 
  }
}
