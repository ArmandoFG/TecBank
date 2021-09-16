// Importar modulos del router de angular
import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule } from "@angular/router";


// Importar mis modulos
import { LoginComponent } from "./components/login/login.component";
import { TerminalComponent } from "./components/terminal/terminal.component";
import { MenubarComponent } from "./components/menubar/menubar.component";
import { TransferenciaComponent } from "./components/transferencia/transferencia.component";
import { TarjetasComponent } from "./components/tarjetas/tarjetas.component";
import { MovimientoComponent } from "./components/movimiento/movimiento.component";

// Array de rutas
const appRoutes: Routes = [
    {path: '',component: LoginComponent},
    {path: 'login',component: TerminalComponent},
    {path: 'transferencia', component: TransferenciaComponent},
    {path: 'movimientos', component: MovimientoComponent},
    {path: 'tarjetas', component: TarjetasComponent},
    {path: '**', component: TerminalComponent}
];

// Exportar el modulo del router

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

