import { Component, Input, OnInit } from '@angular/core';
import { CardID } from 'src/cardId.model';

@Component({
  selector: 'app-doing',
  templateUrl: './doing.component.html',
  styleUrls: ['./doing.component.css']
})
export class DoingComponent implements OnInit {

  @Input() doingTaskList!: CardID[];
  task!: CardID;

  constructor() {}

  ngOnInit(): void {
    
  }

}
