export class Card {
    public title!: string;
    public content!: string;
    public stepID!: number;

    constructor (title: string, content: string, stepID: number) {
        this.title = title;
        this.content = content;
        this.stepID = stepID;
    }

}