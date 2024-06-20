import { Component } from '@angular/core';
import { PokemonTcgService } from '../../services/pokemon-tcg.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
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
