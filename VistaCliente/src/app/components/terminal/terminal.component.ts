import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/models/cuenta';
import { CuentasService } from 'src/app/services/cuentas.service';

@Component({
  selector: 'terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
  providers: [CuentasService]
})
export class TerminalComponent implements OnInit {

  constructor(
    private _CuentasService: CuentasService
  ) { }

  ngOnInit(): void {
    this._CuentasService.getCuentas;
  }

}
