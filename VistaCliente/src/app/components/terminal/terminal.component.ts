import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/models/cuenta';
import { CuentasService } from 'src/app/services/cuentas.service';
/**
  * @fileoverview Carga la pagina principal, esta se carga
  * despues de hacer un login
  * @author Fatima Leiva
  */
@Component({
  selector: 'terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
  providers: [CuentasService]
})
export class TerminalComponent implements OnInit {
  /** @constructor */
  constructor(
    private _CuentasService: CuentasService 
  ) { }
  
    /**Estaria obteniendo las cuentas que hay asociadas
     * a un mismo usuario
     */
  ngOnInit(): void {
    this._CuentasService.getCuentas;
  }

}
