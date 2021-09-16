import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { CrearAccountComponent } from './accounts/crear-account/crear-account.component';
import { CardsComponent } from './cards/cards.component';
import { CrearCardComponent } from './cards/crear-card/crear-card.component';
import { ClientsComponent } from './clients/clients.component';
import { CrearClienteComponent } from './clients/crear-cliente/crear-cliente.component';
import { MoraComponent } from './mora/mora.component';
import { CrearRolComponent } from './roles/crear-rol/crear-rol.component';
import { RolesComponent } from './roles/roles.component';
import { RetiroDepositoComponent } from './accounts/retiro-deposito/retiro-deposito.component';

const routes: Routes = [
  {path: 'cards', component:CardsComponent},
  {path: 'accounts', component:AccountsComponent},
  {path: 'clients', component:ClientsComponent},
  {path: 'mora', component:MoraComponent},
  {path: 'roles', component:RolesComponent},
  {path: 'crear-cliente', component: CrearClienteComponent},
  {path: 'edit-cliente/:cedula', component: CrearClienteComponent},
  {path: 'crear-rol', component: CrearRolComponent},
  {path: 'edit-rol/:nombre', component: CrearRolComponent},
  {path: 'crear-card', component: CrearCardComponent},
  {path: 'edit-card/:codigo', component: CrearCardComponent},
  {path: 'crear-account', component: CrearAccountComponent},
  {path: 'edit-account/:numero', component: CrearAccountComponent},
  {path: 'app-retiro-deposito', component: RetiroDepositoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
