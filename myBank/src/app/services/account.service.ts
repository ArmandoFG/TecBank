import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuenta } from '../interfaces/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  cuentasList: Cuenta[] = [
    {numero: "CR000100010001", descripcion: "Descripcion de cuenta", moneda: "dolares", 
    tipo: "Ahorros", cliente: "Fatima Leiva"},
    {numero: "CR000200020002", descripcion: "Descripcion de cuenta", moneda: "colones", 
    tipo: "Ahorros", cliente: "Alejandro Benavides"},
    {numero: "CR000300030003", descripcion: "Descripcion de cuenta", moneda: "dolares", 
    tipo: "Ahorros", cliente: "Alejandro Benavides"},
    {numero: "CR000400040004", descripcion: "Descripcion de cuenta", moneda: "dolares", 
    tipo: "Ahorros", cliente: "Carmen Araya"},
    {numero: "CR000100010001", descripcion: "Descripcion de cuenta", moneda: "colones", 
    tipo: "Ahorros", cliente: "Fatima Leiva"}
  ];

  index: number = 5;

  constructor() { }

  getCuenta(){
    return this.cuentasList.slice();
  }

  eliminarCuenta(index: number){
    this.cuentasList.splice(index, 1);
  }

  agregarCuenta(cuenta: Cuenta){
    this.cuentasList.unshift(cuenta);
  }

  cuentaEditar(numeroAux: string){
    return this.cuentasList.find( ced => ced.numero == numeroAux);
  }

  editarCuenta(cuentaUpdate: Cuenta){
    const index = this.cuentasList.find( ced => ced.numero == cuentaUpdate.numero);
    this.cuentasList[0].numero = cuentaUpdate.numero;
    this.cuentasList[0].descripcion = cuentaUpdate.descripcion;
    this.cuentasList[0].moneda = cuentaUpdate.moneda;
    this.cuentasList[0].tipo = cuentaUpdate.tipo;
    this.cuentasList[0].cliente = cuentaUpdate.cliente;
  }

}
