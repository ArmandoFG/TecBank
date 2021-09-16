import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from '../interfaces/cliente';
import { ClienteService } from '../services/cliente.service';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

/**
 * Clase para el componente de los Clientes
 * @author Carmen Araya
 * */
export class ClientsComponent implements OnInit {

  listClientes: Cliente[] = [];
  displayedColumns: string[] = ['nombre', 'cedula','telefono', 'direccion','tipo' ,'ingreso' ,  'usuario', 'password', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  /**
   * Metodo que constructor de la clase
   * @param ClienteService Servicio de Clientes
   *
   * */
  constructor(private _clienteService: ClienteService) { 
  }

  /**
  * Metodo que ejecuta otros metodos al correr la aplicación
  * */
  ngOnInit(): void {
    this.cargarClientes();
  }

  /**
  * Metodo que carga los clientes que existen en el servicio y las muestra en la tabla
  * */
  cargarClientes(){
    this.listClientes = this._clienteService.getClient();
    this.dataSource = new MatTableDataSource(this.listClientes)
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
  eliminarCliente(index: number){
    console.log(index);
    this._clienteService.eliminarClient(index);
    this.cargarClientes();
  }

}
