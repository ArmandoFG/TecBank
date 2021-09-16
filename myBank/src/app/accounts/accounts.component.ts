import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AccountService } from '../services/account.service';
import { Cuenta } from '../interfaces/account';
import { CrearAccountComponent } from './crear-account/crear-account.component';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})


/**
 * Clase para el componente de la Cuenta
 * @author Carmen Araya
 * */
export class AccountsComponent implements OnInit {

  listCuentas: Cuenta[] = [];
  displayedColumns: string[] = ['numero', 'descripcion', 'moneda','tipo' ,'cliente', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  /**
   * Metodo que constructor de la clase
   * @param AccountService Servicio de Cuenta
   *
   * */
  constructor(private _cuentaService: AccountService) { 
  }

  /**
  * Metodo que ejecuta otros metodos al correr la aplicación
  * */
  ngOnInit(): void {
    this.cargarCuentas();
  }

  /**
  * Metodo que carga las cuentas que existen en el servicio y las muestra en la tabla
  * */
  cargarCuentas(){
    this.listCuentas = this._cuentaService.getCuenta();
    this.dataSource = new MatTableDataSource(this.listCuentas)
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
  eliminarCuenta(index: number){
    console.log(index);

    this._cuentaService.eliminarCuenta(index);
    this.cargarCuentas();
  }

}

