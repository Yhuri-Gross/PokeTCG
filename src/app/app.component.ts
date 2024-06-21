import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsListComponent } from './pages/cards-list/cards-list.component';
import { SetsListComponent } from './pages/sets-list/sets-list.component';
import { LoginComponent } from './pages/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, CardsListComponent, SetsListComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PokemonTCG';
}
