import {Routes} from '@angular/router';
import {FilmsComponent} from './pages/films/films.component';
import {LoginComponent} from './pages/login/login.component';

export const routes: Routes = [
  {path: 'films', component: FilmsComponent},
  {path: 'login', component: LoginComponent}
];
