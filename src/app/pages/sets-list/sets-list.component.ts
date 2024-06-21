import { Component } from '@angular/core';
import { PokemonTcgService } from '../../services/pokemon-tcg.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sets-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sets-list.component.html',
  styleUrl: './sets-list.component.scss'
})
export class SetsListComponent {
  sets: any[] = [];
  searchTerm: string = '';
  page: number = 1;
  pageSize: number = 20;

  constructor(private pokemonTcgService: PokemonTcgService) { }

  ngOnInit(): void {
    this.loadSets();
  }

  loadSets(): void {
    this.pokemonTcgService.getSets().subscribe(resp => {
      this.sets = resp.data;
      console.log(this.sets);
    });
  }

  onScroll(): void {
    this.page++;
    this.loadSets();
  }

  onSearch(term: string): void {
    this.searchTerm = term;
    this.page = 1;
    this.sets = [];
    this.loadSets();
  }

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.onSearch(inputElement.value);
  }
}
