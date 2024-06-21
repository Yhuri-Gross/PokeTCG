import { Routes } from '@angular/router';
import { CardsListComponent } from './pages/cards-list/cards-list.component';
import { SetsListComponent } from './pages/sets-list/sets-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/cards', pathMatch: 'full' },
    { path: 'cards', component: CardsListComponent },
    { path: 'sets', component:  SetsListComponent},
];
