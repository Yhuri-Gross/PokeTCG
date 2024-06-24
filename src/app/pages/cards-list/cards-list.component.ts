import { Component, HostListener } from '@angular/core';
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
  isLoading: boolean = false;

  constructor(private pokemonTcgService: PokemonTcgService) { }

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    if (this.isLoading) return;
    this.isLoading = true;
    this.pokemonTcgService.getCards(this.page, this.searchTerm).subscribe({
      next: resp => this.cards = [...this.cards, ...resp.data],
      error: err => console.error(err),
      complete: () => this.isLoading = false
    });
  }

  onInput(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.page = 1;
    this.cards = [];
    this.loadCards();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      this.page++;
      this.loadCards();
    }
  }

  onMouseMove(event: MouseEvent, card: any): void {
    const cardElement = event.currentTarget as HTMLElement;
    const rect = cardElement.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    const rotateX = (y / rect.height) * 50;
    const rotateY = (x / rect.width) * -50;
    card.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  onMouseLeave(card: any): void {
    card.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  }
}
