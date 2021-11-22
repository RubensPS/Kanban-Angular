import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/card.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() card!: Card

  constructor(
    
  ) { }

  ngOnInit(): void {
  }

  backwards() {
    this.card.stepID > 1 ? this.card.stepID-- : alert('This task is not in progress.');
  }

  forwards() {
    this.card.stepID < 3 ? this.card.stepID++ : alert('This task is finished.')
  }
  
  deleteTask() {
    // this.card.delete()
  }
}
