import { Component, HostListener, OnInit } from '@angular/core';
import { PokemonTcgService } from '../../services/pokemon-tcg.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sets-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sets-list.component.html',
  styleUrls: ['./sets-list.component.scss']
})
export class SetsListComponent implements OnInit {
  sets: any[] = [];
  searchTerm: string = '';
  page: number = 1;
  isLoading: boolean = false;

  constructor(private pokemonTcgService: PokemonTcgService) { }

  ngOnInit(): void {
    this.loadSets();
  }

  loadSets(): void {
    if (this.isLoading) return;
    this.isLoading = true;
    this.pokemonTcgService.getSets(this.page, this.searchTerm).subscribe({
      next: resp => this.sets = [...this.sets, ...resp.data],
      error: err => console.error(err),
      complete: () => this.isLoading = false
    });
  }

  onInput(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.page = 1;
    this.sets = [];
    this.loadSets();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      this.page++;
      this.loadSets();
    }
  }
}
