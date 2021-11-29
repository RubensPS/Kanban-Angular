import { Component, OnInit } from '@angular/core';
import { Card } from '../card.model';
import { APIService } from '../../service/api.service';
import { CardID } from 'src/cardId.model';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FRONTComponent implements OnInit {

  show: boolean = false;
  title!: string;
  content!: string;
  cardList!: CardID[];
  card!: Card;

  constructor( private apiService: APIService) {}

  ngOnInit(): void {

    this.apiService.taskListChange.subscribe({
      next: () => this.getTasks(),
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    });
    
    this.getTasks();

  }
  
  toggle() {
    this.show = !this.show;
  }

  getTitulo(event:string) {
    this.title = event;
  }

  getConteudo(event: string) {
    this.content = event;
  }

  confirm() {
    this.card = new Card(this.title, this.content, "ToDo");
    
    this.apiService.newCard(this.card).subscribe({
      next: (task) => this.apiService.taskListChange.next(task),
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })

    this.show = !this.show;
    this.title = '';
    this.content = '';
  }

  getTasks() {
    this.apiService.getCards().subscribe({
      next: (res: CardID[]) => this.cardList = res,
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  }

}
