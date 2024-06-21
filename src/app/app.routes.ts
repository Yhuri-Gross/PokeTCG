import { Routes } from '@angular/router';
import { CardsListComponent } from './pages/cards-list/cards-list.component';
import { SetsListComponent } from './pages/sets-list/sets-list.component';
import { LoginComponent } from './pages/login/login.component';
import { CardDetailComponent } from './pages/card-detail/card-detail.component';
import { SetDetailComponent } from './pages/set-detail/set-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'cards', component: CardsListComponent },
    { path: 'cards/:id', component: CardDetailComponent },
    { path: 'sets', component:  SetsListComponent},
    { path: 'sets/:id', component: SetDetailComponent },
    { path: 'login', component:  LoginComponent},
];
