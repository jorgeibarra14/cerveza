import { GridProductosComponent } from './../components/grid-productos/grid-productos.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Routes, RouterModule, Route } from '@Angular/router';
import { app_routing } from '../app.routes';
import { AngularFireAuthModule } from '@angular/fire/auth';


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    app_routing

  ]
})
export class ContainerModule {}
