import { Component, OnInit } from '@angular/core';
import { PeticionCuenta } from 'src/app/services/peticioncuenta.service';


@Component({
  selector: 'movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css'],
  providers: [PeticionCuenta]
})
export class MovimientoComponent implements OnInit {
  
  movimientos: any[] = [];
  constructor(
    private _peticionesService: PeticionCuenta
  ) {
   }

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
