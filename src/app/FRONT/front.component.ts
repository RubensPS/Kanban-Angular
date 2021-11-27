import { Component, OnInit } from '@angular/core';
import { Card } from '../card.model';
import { APIService } from '../api.service';
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

    this.authenticate();

    // this.apiService.taskListChange.subscribe(()=>this.getTasks());

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
    this.apiService.newCard(this.card).subscribe((task) =>{
      this.apiService.taskListChange.next(task);
      console.log(task)})
    this.show = !this.show;
    this.title = '';
    this.content = '';
  }

  authenticate() {
    this.apiService.getAuth().subscribe((token) => {
      localStorage.setItem('token', token);
      this.getTasks();
      })
  }

  getTasks() {
    this.apiService.getCards().subscribe((res: CardID[]) => 
    this.cardList = res) 
  }
}
