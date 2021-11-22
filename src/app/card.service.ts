import { Content } from "@angular/compiler/src/render3/r3_ast";
import { Card } from "./card.model";

export class CardService {
    private cardList: Card[] = [
        {title: "Configurar botão edit", content: "botão deve chamar um form com inputs para title e Content", stepID: 1},
        {title: "Configurar botão delete", content: "botão deve apagar o cartão no qual se encontra", stepID: 1},
        {title: "Elaborar html do botão edit", content: "o html deve ter o formato de um card, com botões de confirm e cancel", stepID: 1},
        {title: "Configurar botão delete", content: "botão deve apagar o cartão no qual se encontra", stepID: 1},
        {title: "Configurar botão delete", content: "botão deve apagar o cartão no qual se encontra", stepID: 1},
        {title: "Configurar botão delete", content: "botão deve apagar o cartão no qual se encontra", stepID: 1},
    ];

    getList() {
        return this.cardList;
    }
}