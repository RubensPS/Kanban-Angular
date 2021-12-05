export class Card {
    public titulo!: string;
    public conteudo!: string;
    public lista!: string;

    constructor (titulo: string, conteudo: string, lista: 'ToDo') {
        this.titulo = titulo;
        this.conteudo = conteudo;
        this.lista = lista;
    }

}