import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from "./app.routing";
import { HttpClientModule} from "@angular/common/http"
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';


import { AppComponent } from './app.component';
import { MiComponente } from './components/mi_componente/mi_componente.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { LoginComponent } from './components/login/login.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
import { MovimientoComponent } from './components/movimiento/movimiento.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    TerminalComponent,
    LoginComponent,
    MenubarComponent,
    TransferenciaComponent,
    MovimientoComponent,
    TarjetasComponent
  ],
  imports: [
    BrowserModule,
    routing, 
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
