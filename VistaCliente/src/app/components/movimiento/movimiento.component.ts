import { Component, OnInit } from '@angular/core';
import { PeticionCuenta } from 'src/app/services/peticioncuenta.service';
/**
  * @fileoverview Inicia la pagina para ver los movimientos
  * que ha hecho una cuenta, los dato se obtienen del API
  * @author Fatima Leiva
  */

@Component({
  selector: 'movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css'],
  providers: [PeticionCuenta]
})
export class MovimientoComponent implements OnInit {
  
  movimientos: any[] = []; /**Guarda los datos que vienen del API */
  /**@constructor */
  constructor(
    private _peticionesService: PeticionCuenta
  ) {
   }
   /**
    * Hace la peticion de los movimientos al API
    * apenas se inicia la pagina
    * Si se obtiene un error lo imprime en pantalla y
    * por lo tanto no carga ningún movimiento
    */
  ngOnInit(): void {

    this._peticionesService.getMovimiento().subscribe(
      result => {
        console.log(result);
        this.movimientos=result;
      }, error=>{
        console.log("EROOOOR");
        console.log(<any>error);
      }
    );
  }
  

}
