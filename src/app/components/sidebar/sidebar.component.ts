import { Component } from '@angular/core';
import { PokemonTcgService } from '../../services/pokemon-tcg.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  card: any;

  constructor(
    private service: PokemonTcgService
  ){

  }
  ngOnInit(){
    this.service.getSets().subscribe(resp => {
      this.card = resp.data;
      console.log(resp.data);
   })
  }

}
