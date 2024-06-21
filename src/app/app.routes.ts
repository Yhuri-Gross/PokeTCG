import { Routes } from '@angular/router';
import { CardsListComponent } from './pages/cards-list/cards-list.component';
import { SetsListComponent } from './pages/sets-list/sets-list.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'cards', component: CardsListComponent },
    { path: 'sets', component:  SetsListComponent},
    { path: 'login', component:  LoginComponent},
];
