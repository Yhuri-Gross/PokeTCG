import { Component } from '@angular/core';
import { PokemonTcgService } from '../../services/pokemon-tcg.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss'
})
export class CardsListComponent {
  cards: any[] = [];
  searchTerm: string = '';
  page: number = 1;

  constructor(private pokemonTcgService: PokemonTcgService) { }

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    this.pokemonTcgService.getCards().subscribe(data => {
      this.cards = data;
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
}
