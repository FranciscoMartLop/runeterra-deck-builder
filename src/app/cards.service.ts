import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private apiData = 'http://apis.manelme.com/data';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  async getCards() {
    const url = `${this.apiData}/cards`;
    return await this.http.get(url).toPromise();
  }

  async getRegions() {
    const url = `${this.apiData}/regions`;
    return await this.http.get(url).toPromise();
  }

}
