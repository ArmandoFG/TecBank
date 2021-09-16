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
export class RolesComponent implements OnInit {

  listRoles: Rol[] = [];
  displayedColumns: string[] = ['nombre', 'descripcion', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _rolService: RolService) { 
  }
  ngOnInit(): void {
    this.cargarRoles();
  }


  cargarRoles(){
    this.listRoles = this._rolService.getRol();
    this.dataSource = new MatTableDataSource(this.listRoles)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  eliminarRol(index: number){
    console.log(index);

    this._rolService.eliminarRol(index);
    this.cargarRoles();
  }

}
