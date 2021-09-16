import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Tarjeta } from '../interfaces/card';
import { CardService } from '../services/card.service';
import { CrearCardComponent } from './crear-card/crear-card.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

/**
 * Clase para el componente de la Cuenta
 * @author Carmen Araya
 * */
export class CardsComponent implements OnInit {

  listCards: Tarjeta[] = [];
  displayedColumns: string[] = ['numero', 'tipo', 'fecha','codigo' ,'saldo', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  /**
   * Metodo que constructor de la clase
   * @param CardService Servicio de Tarjetas
   *
   * */
  constructor(private _cardService: CardService) { 
  }

  /**
  * Metodo que ejecuta otros metodos al correr la aplicación
  * */
  ngOnInit(): void {
    this.cargarTarjetas();
  }

  /**
  * Metodo que carga las tarjetas que existen en el servicio y las muestra en la tabla
  * */
  cargarTarjetas(){
    this.listCards = this._cardService.getCard();
    this.dataSource = new MatTableDataSource(this.listCards)
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
  eliminarTarjeta(index: number){
    console.log(index);

    this._cardService.eliminarCard(index);
    this.cargarTarjetas();
  }

}

