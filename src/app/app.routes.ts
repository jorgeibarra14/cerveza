import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';

import { ContainerComponent } from './container/container.component';
import { GridProductosComponent } from './components/grid-productos/grid-productos.component';
import { LoginComponent } from './components/login/login.component';

const app_routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'catalogo', component: GridProductosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
