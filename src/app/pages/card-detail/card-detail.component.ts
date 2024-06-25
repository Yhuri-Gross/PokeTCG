import { Component } from '@angular/core';
import { PokemonTcgService } from '../../services/pokemon-tcg.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.scss'
})
export class CardDetailComponent {

  card: Card | undefined;

  constructor(private route: ActivatedRoute, private pokemonTcgService: PokemonTcgService) { }

  ngOnInit(): void {
    const cardId = this.route.snapshot.paramMap.get('id');
    this.pokemonTcgService.getCardId(cardId).subscribe(resp => {
      console.log("card iddddd");
      console.log(resp.data);
      this.card = resp.data;
    });
  }

  getTypeClass(type: string): string {
    return `type-${type.toLowerCase()}`;
  }
}
