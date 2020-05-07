import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private apiUrl = 'http://apis.manelme.com/data'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getCards() {
    const url = `${this.apiUrl}/cards`;
    return this.http.get(url);
  }

  getRegions() {
    const url = `${this.apiUrl}/regions`;
    return this.http.get(url);
  }

}
