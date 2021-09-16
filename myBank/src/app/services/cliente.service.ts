import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientsList: Cliente[] = [
    {nombre: "Fatima Leiva", cedula: "305220456", telefono: "64457556", 
    direccion: "Los Santos", tipoCliente: "Fisico", ingreso: "150000", usuario: "faleiva", password: "loveDoger27"},
    {nombre: "Alejandro Benavides", cedula: "105670890", telefono: "83409116", 
    direccion: "Quisquella", tipoCliente: "Fisico", ingreso: "8750000", usuario: "alebecha", password: "amoCamer02"},
    {nombre: "Carmen Araya", cedula: "305270400", telefono: "72708906", 
    direccion: "Turrialba", tipoCliente: "Fisico", ingreso: "240000", usuario: "varaya", password: "amoloscookies"},
  ];

  constructor() { }

  getClient(){
    return this.clientsList.slice();
  }

  eliminarClient(index: number){
    this.clientsList.splice(index, 1);
  }

  agregarCliente(cliente: Cliente){
    this.clientsList.unshift(cliente);
  }

  clienteEditar(cedulaAux: string){
    return this.clientsList.find( ced => ced.cedula == cedulaAux);
  }

  editarCliente(clienteUpdate: Cliente){
    const index = this.clientsList.find( ced => ced.cedula == clienteUpdate.cedula);
    this.clientsList[0].nombre = clienteUpdate.nombre;
    this.clientsList[0].cedula = clienteUpdate.cedula;
    this.clientsList[0].telefono = clienteUpdate.telefono;
    this.clientsList[0].direccion = clienteUpdate.direccion;
    this.clientsList[0].tipoCliente = clienteUpdate.tipoCliente;
    this.clientsList[0].ingreso = clienteUpdate.ingreso;
    this.clientsList[0].usuario = clienteUpdate.usuario;
    this.clientsList[0].password = clienteUpdate.password;
  }

}