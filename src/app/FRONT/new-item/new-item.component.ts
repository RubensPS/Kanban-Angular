import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  titulo!: string;
  conteudo!: string;
  @Output() emitTitulo: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitConteudo: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  
  sendTitulo(){
    this.emitTitulo.emit(this.titulo);
  }

  sendConteudo() {
    this.emitConteudo.emit(this.conteudo);
  }
}
