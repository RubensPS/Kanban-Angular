import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { Card } from "../app/card.model";
import { CardID } from "src/cardId.model";

@Injectable({
    providedIn: 'root'
})

export class APIService {
    
    apiURL = 'http://localhost:5000/';
    
    constructor ( private http: HttpClient) {}

    taskListChange = new Subject()
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    getToken() {
        const retrieveToken = localStorage.getItem('token');
        return retrieveToken;
    }

    getCards(): Observable<any> {
        const token = this.getToken();
        const header = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        }
        const getRes = this.http.get(this.apiURL + 'cards', header)
        return getRes
    }
    
    newCard(card: Card): Observable<any> {
        const token = this.getToken();
        const header = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        }
        const postCard = this.http.post(this.apiURL+ 'cards', card, header)
        return postCard
    }

    editCard(card: CardID) {
        const token = this.getToken();
        const header = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        }
        const putCard = this.http.put(this.apiURL + `cards/${card.id}`, card, header)
        return putCard
    }

    deleteCard(card: CardID) {
        const token = this.getToken();
        const header = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        }
        const delCard = this.http.delete(this.apiURL + `cards/${card.id}`, header)
        return delCard
    }

}


