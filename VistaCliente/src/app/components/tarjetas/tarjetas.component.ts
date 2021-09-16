import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  tarjetas: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.tarjetas= 
      [
        {
            "numero": 119926384,
            "saldo": 300000,
            "tipo": "Debito",
            "fechaexp": "12/7/2026"
        },
        {
          "numero": 125777230,
          "saldo": 1250000,
          "tipo": "Credito",
          "fechaexp": "15/3/2025"
      }
      ]
    }
  

}
