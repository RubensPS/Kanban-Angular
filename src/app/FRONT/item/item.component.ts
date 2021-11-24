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
    
  }

  forwards() {
    
  }
  
  deleteTask() {
    // this.card.delete()
  }
}
