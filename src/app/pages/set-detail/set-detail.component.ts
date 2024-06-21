import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonTcgService } from '../../services/pokemon-tcg.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-set-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './set-detail.component.html',
  styleUrl: './set-detail.component.scss'
})
export class SetDetailComponent {

  set: any;

  constructor(private route: ActivatedRoute, private pokemonTcgService: PokemonTcgService) { }

  ngOnInit(): void {
    const setId = this.route.snapshot.paramMap.get('id');
    this.pokemonTcgService.getSetId(setId).subscribe(resp => {
      console.log("set iddddd");
      console.log(resp.data);
      this.set = resp.data;
    });
  }
}
