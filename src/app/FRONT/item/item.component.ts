import { Component, Input, OnInit } from '@angular/core';
import { APIService } from 'src/service/api.service';
import { CardID } from 'src/cardId.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() task!: CardID;
  isEditing: boolean = false;
  titleChange!: string;
  contentChange!: string;
  changeLista!: CardID;
  editTitleContent!: CardID;

  constructor(private apiService: APIService) { }

  ngOnInit(): void {

  }

  backwards() {
    if (this.task.lista === 'Done') {
      this.changeLista = {id: this.task.id, titulo: this.task.titulo, conteudo: this.task.conteudo, lista: 'Doing'}
    } else if (this.task.lista === 'Doing') {
      this.changeLista = {id: this.task.id, titulo: this.task.titulo, conteudo: this.task.conteudo, lista: 'ToDo'}
    } else alert("This is the first task status!" )

    this.apiService.editCard(this.changeLista).subscribe({
      next: (p) => this.apiService.taskListChange.next(p),
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  }

  forwards() {
    if (this.task.lista === 'ToDo') {
      this.changeLista = {id: this.task.id, titulo: this.task.titulo, conteudo: this.task.conteudo, lista: 'Doing'}
    } else if (this.task.lista === 'Doing') {
      this.changeLista = {id: this.task.id, titulo: this.task.titulo, conteudo: this.task.conteudo, lista: 'Done'}
    } else alert("This task is already finished!")

    this.apiService.editCard(this.changeLista).subscribe({
      next: (p) => this.apiService.taskListChange.next(p),
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  }
  
  deleteTask() {
    this.apiService.deleteCard(this.task).subscribe({
      next: (p) => this.apiService.taskListChange.next(p),
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  }

  cancelChanges() {
    this.isEditing = !this.isEditing;
  }

  confirmChanges() {
    this.changeLista = {id: this.task.id, titulo: this.titleChange, conteudo: this.contentChange, lista: this.task.lista}
    
    this.apiService.editCard(this.changeLista).subscribe({
      next: (p) => this.apiService.taskListChange.next(p),
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
      this.isEditing = !this.isEditing;
  }

  toggle() {
    this.isEditing = !this.isEditing;
    this.titleChange = this.task.titulo;
    this.contentChange = this.task.conteudo;
  }

}
