import { Component } from '@angular/core';
import { PokemonTcgService } from '../../services/pokemon-tcg.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss'
})
export class CardsListComponent {
  cards: any[] = [];
  searchTerm: string = '';
  page: number = 1;
  pageSize: number = 20;

  constructor(private pokemonTcgService: PokemonTcgService) { }

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    this.pokemonTcgService.getCards(this.page, this.searchTerm).subscribe(resp => {
      this.cards = resp.data;
      console.log(this.cards);
    });
  }

  onScroll(): void {
    this.page++;
    this.loadCards();
  }

  onSearch(term: string): void {
    this.searchTerm = term;
    this.page = 1;
    this.cards = [];
    this.loadCards();
  }

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.onSearch(inputElement.value);
  }
}
