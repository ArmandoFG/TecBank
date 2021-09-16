import { isFakeTouchstartFromScreenReader } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { PeticionCuenta } from 'src/app/services/peticioncuenta.service';


@Component({
  selector: 'transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css'],
  providers: [PeticionCuenta]
})
export class TransferenciaComponent implements OnInit {
  public inputValue:any;
  public inputValue2:any;
  public selectedOption: any;
  public printedOption: any;
  public new_transaction:any;
  public transaction_num: any;
  public fecha:any;
  public transaction_date:any;
  public transaction_monto:any;

  options = [
    { name: "Colones", value: 1 },
    { name: "Dolares", value: 2 },
    { name: "Euros", value: 2 }
  ]

  constructor(
    private _peticionesService: PeticionCuenta
  ) {
    this.new_transaction={
      "numtran": "",
        "monto": "",
        "tipo": "",
        "descripcion": "",
        "fecha": ""
    }
    this.transaction_num=15;
    this.fecha= new Date();
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    console.log("FECHA DE HOY "+hoy.toLocaleDateString());
    this.transaction_date= hoy.toLocaleDateString();
    
   }

  ngOnInit(): void {
  }

  submitInfo(){
    this.printedOption = this.selectedOption;
    this.new_transaction.numtran=this.transaction_num;
    this.new_transaction.tipo= 'Retiro';
    this.new_transaction.fecha= this.transaction_date;
    this.new_transaction.monto= parseInt(this.transaction_monto);

    console.log(this.new_transaction.monto);
    console.log("Monto a debitar: "+this.inputValue);
    console.log("Moneda del monto: "+this.printedOption);
    console.log("Cuenta a acreditar: "+this.inputValue2);
    alert("Transacción realizada");
    this.transaction_num++;
    console.log(this.new_transaction);
    this.hacerPost();
  }

  hacerPost(){
    this._peticionesService.postMovimiento(this.new_transaction).subscribe(
      response => {
        console.log(response);
        
      }, error=>{
        console.log("HAY UN ERROR EN EL POST");
        console.log(<any>error);
      }
      
    );

  }
  onKey(event:any) {this.inputValue = event.target.value;}
  onKey2(event:any) {this.inputValue2 = event.target.value;}
  
}
