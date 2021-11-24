import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/card.model';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  cardList!: Card[];

  constructor() { }

  ngOnInit(): void {
    
  }

}
