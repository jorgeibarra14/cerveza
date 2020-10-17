import { GridProductosComponent } from './components/grid-productos/grid-productos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { ContainerComponent } from '../app/container/container.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: ContainerComponent },
  { path: 'home/catalogo', component: GridProductosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
