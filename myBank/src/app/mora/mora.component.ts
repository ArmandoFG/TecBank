import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from '../interfaces/cliente';
import { ClienteService } from '../services/cliente.service';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-mora',
  templateUrl: './mora.component.html',
  styleUrls: ['./mora.component.css']
})
export class MoraComponent implements OnInit {

  listClientes: Cliente[] = [];
  displayedColumns: string[] = ['nombre', 'usuario', 'acciones'];
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

  crearReporte(index: number){
    const doc = new jsPDF();
    console.log("Se creo el reporte de: " + index);
    doc.text("Reporte de Mora", 15, 15);
    doc.text("Nombre Completo: Carmen Araya ", 15, 30);
    doc.text("Cedula: 305270400", 15, 45);
    doc.text("Numero de prestamo: PT655", 15, 60);
    doc.text("Cuotas Vencidas: 3", 15, 75);
    doc.text("Monto adeudado: $56000", 15, 90);
    doc.save("Reporte de Mora");
  }

}
