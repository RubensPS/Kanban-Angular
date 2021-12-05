export class CardID {
    public id!: string;
    public titulo!: string;
    public conteudo!: string;
    public lista!: string;

    constructor (id: string, titulo: string, conteudo: string, lista: string) {
        this.id = id;
        this.titulo = titulo;
        this.conteudo = conteudo;
        this.lista = lista;
    }

}