import { AddProductComponent } from './components/add-product/add-product.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { LoginModule } from '../app/components/login/login.module';
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { GridProductosComponent } from '../app/components/grid-productos/grid-productos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from '../app/container/container.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Routes, Route, RouterModule } from '@Angular/router';
import { WindowModule } from '@progress/kendo-angular-dialog';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { app_routing } from './app.routes';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { PosComponent } from './components/pos/pos.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: ContainerComponent },
  { path: 'home/catalogo', component: GridProductosComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    GridProductosComponent,
    ContainerComponent,
    AddProductComponent,
    EditProductComponent,
    PosComponent
   ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    LoginModule,
    GridModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    app_routing,
    PDFModule,
    ExcelModule,
    WindowModule,
    FormsModule,
    HttpClientModule
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
