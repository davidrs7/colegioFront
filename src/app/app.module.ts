import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { ProfeTarjetaComponent } from './pages/profe-tarjeta/profe-tarjeta.component';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfesoresComponent,
    ProfeTarjetaComponent, 
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
