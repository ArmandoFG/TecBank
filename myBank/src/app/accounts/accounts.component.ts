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
export class AccountsComponent implements OnInit {

  listCuentas: Cuenta[] = [];
  displayedColumns: string[] = ['numero', 'descripcion', 'moneda','tipo' ,'cliente', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _cuentaService: AccountService) { 
  }
  ngOnInit(): void {
    this.cargarCuentas();
  }


  cargarCuentas(){
    this.listCuentas = this._cuentaService.getCuenta();
    this.dataSource = new MatTableDataSource(this.listCuentas)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  eliminarCuenta(index: number){
    console.log(index);

    this._cuentaService.eliminarCuenta(index);
    this.cargarCuentas();
  }

}

