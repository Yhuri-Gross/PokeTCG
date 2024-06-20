import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonTcgService {
  url: string = 'https://docs.pokemontcg.io';

  constructor() { }
}
