import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RolesComponent } from './roles/roles.component';
import { ClientsComponent } from './clients/clients.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CardsComponent } from './cards/cards.component';
import { MoraComponent } from './mora/mora.component';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CrearClienteComponent } from './clients/crear-cliente/crear-cliente.component';
import { CrearRolComponent } from './roles/crear-rol/crear-rol.component';
import { CrearCardComponent } from './cards/crear-card/crear-card.component';
import { CrearAccountComponent } from './accounts/crear-account/crear-account.component';



@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
    ClientsComponent,
    AccountsComponent,
    CardsComponent,
    MoraComponent,
    NavbarComponent,
    CrearClienteComponent,
    CrearRolComponent,
    CrearCardComponent,
    CrearAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
