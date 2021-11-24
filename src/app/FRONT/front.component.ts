import { Component, OnInit } from '@angular/core';
import { Card } from '../card.model';
import { APIService } from '../api.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FRONTComponent implements OnInit {
 
  cardList!: any;
  constructor( private apiService: APIService) {}

  ngOnInit(): void {

    this.apiService.getAuth().subscribe((token) => {
    localStorage.setItem('token', token);
    })

  }
  
}
