import { Component, Input, OnInit } from '@angular/core';
import { CardID } from 'src/cardId.model';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  @Input() doneTaskList!: CardID[];
  task!: CardID;

  constructor() { }

  ngOnInit(): void {
    
  }

}
