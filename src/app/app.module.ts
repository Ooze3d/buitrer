import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { NuevoBuitComponent } from './nuevo-buit/nuevo-buit.component';
import { ListaBuitsComponent } from './lista-buits/lista-buits.component';
import { BuitComponent } from './lista-buits/buit/buit.component';
import { NuevoBuitService } from './nuevo-buit.service'

import { Routes, RouterModule } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';

const appRoutes:Routes = [
  { path:'acercade', component: AcercaDeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegistroComponent,
    NuevoBuitComponent,
    ListaBuitsComponent,
    BuitComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [NuevoBuitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
