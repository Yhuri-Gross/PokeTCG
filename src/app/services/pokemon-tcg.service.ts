import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonTcgService {
  url: string = 'https://api.pokemontcg.io/v2';

  constructor(
    private http:HttpClient
  ) { }

  getCards(page: number, searchTerm: string): Observable<any> {
    return this.http.get(`${this.url}/cards`, {
      params: {
        pageSize: '8',
        page: page.toString(),
        name: searchTerm
      }
    });
  }
  getCardId(id: string | null): Observable<any>{
    console.log(this.http.get<any>(`${this.url}/cards/${id}`));
    return this.http.get<any>(`${this.url}/cards/${id}`)
  }

  getSets(): Observable<any>{
    console.log(this.http.get<any>(`${this.url}/sets`));
    return this.http.get<any>(`${this.url}/sets`)
  }
}
