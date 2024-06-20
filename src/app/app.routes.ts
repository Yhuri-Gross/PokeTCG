import { Routes } from '@angular/router';
import { CardsListComponent } from './pages/cards-list/cards-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/cards', pathMatch: 'full' },
    { path: 'cards', component: CardsListComponent },
];
