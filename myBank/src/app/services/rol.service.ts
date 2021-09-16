import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from '../interfaces/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  rolesList: Rol[] = [
    {nombre: "Secretaria", descripcion:"Esta es una descripcion del rol secretearia"},
    {nombre: "Gerente", descripcion:"Esta es una descripcion del rol gerente"},
    {nombre: "Cajero", descripcion:"Esta es una descripcion del rol cajero"},
    {nombre: "Intendente", descripcion:"Esta es una descripcion del rol intendente"},
    {nombre: "Cliente", descripcion:"Esta es una descripcion del rol cliente"}
  ];

  constructor() { }

  getRol(){
    return this.rolesList.slice();
  }

  eliminarRol(index: number){
    this.rolesList.splice(index, 1);
  }

  agregarRol(rol: Rol){
    this.rolesList.unshift(rol);
  }
  rolEditar(nombreAux: string){
    return this.rolesList.find( ced => ced.nombre ==  nombreAux);
  }

  editarRol(rolUpdate: Rol){
    const index = this.rolesList.find( ced => ced.nombre == rolUpdate.nombre);
    this.rolesList[0].nombre = rolUpdate.nombre;
    this.rolesList[0].descripcion = rolUpdate.descripcion;
  }

}
