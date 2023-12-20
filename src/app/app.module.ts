import { Component, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ColavoradorComponent } from './colavorador/colavorador.component';
import { ReservasComponent } from './reservas/reservas.component';
import { Routes, RouterModule } from '@angular/router';

const rutas: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'colavorador',
    component:ColavoradorComponent
  },
  {
    path:'reservas',
    component:ReservasComponent
  },


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColavoradorComponent,
    ReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(rutas),
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
