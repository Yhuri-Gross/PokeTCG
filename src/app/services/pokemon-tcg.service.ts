import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonTcgService {
  url: string = 'https://api.pokemontcg.io/v2';

  constructor(
    private http: HttpClient
  ) { }

  getCards(page: number, searchTerm: string): Observable<any> {
    let params = new HttpParams()
      .set('pageSize', '12')
      .set('page', page.toString());

    if (searchTerm && searchTerm.length >= 3) {
      params = params.set('q', `name:*${searchTerm}*`);
    }
    return this.http.get(`${this.url}/cards`, { params });
  }


  getCardId(id: string | null): Observable<any> {
    return this.http.get<any>(`${this.url}/cards/${id}`)
  }

  getSets(page: number, searchTerm: string): Observable<any> {
    let params = new HttpParams()
      .set('pageSize', '12')
      .set('page', page.toString());

    if (searchTerm && searchTerm.length >= 3) {
      params = params.set('q', `name:*${searchTerm}*`);
    }
    return this.http.get<any>(`${this.url}/sets`, { params });
  }

  getSetId(id: string | null): Observable<any> {
    return this.http.get<any>(`${this.url}/sets/${id}`)
  }
}
