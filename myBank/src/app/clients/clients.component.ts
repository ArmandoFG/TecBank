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
export class ClientsComponent implements OnInit {

  listClientes: Cliente[] = [];
  displayedColumns: string[] = ['nombre', 'cedula','telefono', 'direccion','tipo' ,'ingreso' ,  'usuario', 'password', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _clienteService: ClienteService) { 
  }
  ngOnInit(): void {
    this.cargarClientes();
  }


  cargarClientes(){
    this.listClientes = this._clienteService.getClient();
    this.dataSource = new MatTableDataSource(this.listClientes)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  eliminarCliente(index: number){
    console.log(index);
    this._clienteService.eliminarClient(index);
    this.cargarClientes();
  }

}
