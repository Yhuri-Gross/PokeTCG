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

  getCards(): Observable<any>{
    console.log(this.http.get<any>(`${this.url}/cards`));
    return this.http.get<any>(`${this.url}/cards`)
  }

  getCardId(id: number): Observable<any>{
    console.log(this.http.get<any>(`${this.url}/cards/${id}`));
    return this.http.get<any>(`${this.url}/cards/${id}`)
  }

  searchCards(query: string, page: number): Observable<any>{
    return this.http.get<any>(`${this.url}/card?name=${query}&page=${page}`)
  }

  getSets(): Observable<any>{
    console.log(this.http.get<any>(`${this.url}/sets`));
    return this.http.get<any>(`${this.url}/sets`)
  }
}
