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
export class CardsComponent implements OnInit {

  listCards: Tarjeta[] = [];
  displayedColumns: string[] = ['numero', 'tipo', 'fecha','codigo' ,'saldo', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _cardService: CardService) { 
  }
  ngOnInit(): void {
    this.cargarTarjetas();
  }


  cargarTarjetas(){
    this.listCards = this._cardService.getCard();
    this.dataSource = new MatTableDataSource(this.listCards)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  eliminarTarjeta(index: number){
    console.log(index);

    this._cardService.eliminarCard(index);
    this.cargarTarjetas();
  }

}

