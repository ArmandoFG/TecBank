import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Rol } from '../interfaces/rol';
import { RolService } from '../services/rol.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})

/**
 * Clase para el componente de los Roles
 * @author Carmen Araya
 * */
export class RolesComponent implements OnInit {

  listRoles: Rol[] = [];
  displayedColumns: string[] = ['nombre', 'descripcion', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  /**
   * Metodo que constructor de la clase
   * @param RolService Servicio de Rol
   *
   * */
  constructor(private _rolService: RolService) { 
  }

  /**
  * Metodo que ejecuta otros metodos al correr la aplicación
  * */
  ngOnInit(): void {
    this.cargarRoles();
  }


  /**
  * Metodo que carga los roles que existen en el servicio y las muestra en la tabla
  * */
  cargarRoles(){
    this.listRoles = this._rolService.getRol();
    this.dataSource = new MatTableDataSource(this.listRoles)
  }

  /**
   * Metodo para realizar la busqueda por nombre de los elementos de la tabla
  * */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Metodo para realizar el ordenamiento de la tabla
  * */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
  * Metodo que elimina un elemento del Servicio y recarga los elementos de la tabla
  * @param index indice del elemento a eliminar
  *
  * */
  eliminarRol(index: number){
    console.log(index);

    this._rolService.eliminarRol(index);
    this.cargarRoles();
  }

}
