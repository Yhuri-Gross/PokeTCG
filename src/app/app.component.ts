import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsListComponent } from './pages/cards-list/cards-list.component';
import { SetsListComponent } from './pages/sets-list/sets-list.component';
import { LoginComponent } from './pages/login/login.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { ProfileComponent } from './pages/profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent,
     CardsListComponent, SetsListComponent, LoginComponent, CommonModule, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  loginIsTrue: boolean = false;


  constructor(
    private router: Router
  ) { }

    ngOnInit() {
      this.checkIfLoginRoute();
      this.router.events.pipe(filter(event => event instanceof NavigationEnd))
                        .subscribe(() => this.checkIfLoginRoute());
    }
  
    checkIfLoginRoute() {
      const url = this.router.url;
      this.loginIsTrue = url.includes('login');
    }
}
