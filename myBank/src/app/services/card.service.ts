import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarjeta } from '../interfaces/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {


  cardsList: Tarjeta[] = [
    {numero: "000100010001", tipo:"Credito", fecha:"04/24", codigo:"767", saldo:"85000"},
    {numero: "000200020002", tipo:"Debito", fecha:"05/22", codigo:"777", saldo:"1285000"},
    {numero: "000300030003", tipo:"Credito", fecha:"03/25", codigo:"165", saldo:"50000"},
    {numero: "000400040004", tipo:"Debito", fecha:"08/24", codigo:"122", saldo:"95000"},
    {numero: "000500050005", tipo:"Credito", fecha:"09/23", codigo:"709", saldo:"800000"}
  ];

  constructor() { }

  getCard(){
    return this.cardsList.slice();
  }

  eliminarCard(index: number){
    this.cardsList.splice(index, 1);
  }

  agregarCard(tarjeta: Tarjeta){
    this.cardsList.unshift(tarjeta);
  }

  tarjetaEditar(codigoAux: string){
    return this.cardsList.find( ced => ced.codigo == codigoAux);
  }

  editarTarjeta(tarjetaUpdate: Tarjeta){
    const index = this.cardsList.find( ced => ced.codigo == tarjetaUpdate.codigo);
    this.cardsList[0].numero = tarjetaUpdate.numero;
    this.cardsList[0].tipo = tarjetaUpdate.tipo;
    this.cardsList[0].fecha = tarjetaUpdate.fecha;
    this.cardsList[0].codigo = tarjetaUpdate.codigo;
    this.cardsList[0].saldo = tarjetaUpdate.saldo;
  }
}