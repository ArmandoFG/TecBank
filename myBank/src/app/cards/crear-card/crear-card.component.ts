import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { Tarjeta } from 'src/app/interfaces/card';
import { CardService } from 'src/app/services/card.service';


@Component({
  selector: 'app-crear-card',
  templateUrl: './crear-card.component.html',
  styleUrls: ['./crear-card.component.css']
})
export class CrearCardComponent implements OnInit {

  tipo: any[] = ['Credito', 'Debito' ]
  form: FormGroup;
  titulo = "Agregar nueva Tarjeta";
  id: string | null;

  constructor(private fb: FormBuilder, 
    private _cardService: CardService,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.form = this.fb.group({
      numero: ['', Validators.required],
      tipo: ['', Validators.required],
      fecha: ['', Validators.required],
      codigo: ['', Validators.required],
      saldo: ['', Validators.required],
    })
    this.id = this.aRoute.snapshot.paramMap.get("codigo");
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarEditarTarjeta(){
    if (this.id == null){
      this.agregarCard();
    }else{
      this.editarTarjeta();
    }
  }

  agregarCard(){
    if(this.form.invalid){
      return;
    }
    const tarjeta: Tarjeta = {
      numero: this.form.value.numero,
      tipo: this.form.value.tipo,
      fecha: this.form.value.fecha,
      codigo: this.form.value.codigo,
      saldo: this.form.value.saldo,
    }
    this._cardService.agregarCard(tarjeta);
    this.router.navigate(['/cards']);
  }
  editarTarjeta(){
    const tarjeta: Tarjeta = {
      numero: this.form.value.numero,
      tipo: this.form.value.tipo,
      fecha: this.form.value.fecha,
      codigo: this.form.value.codigo,
      saldo: this.form.value.saldo,
    }
    this._cardService.editarTarjeta(tarjeta);
    this.router.navigate(['/cards']);
  }

  esEditar(){
    if(this.id != null){
      this.titulo = "Editar Tarjeta"
      const tarjetaPorEditar = this._cardService.tarjetaEditar(this.id);
      console.log(tarjetaPorEditar?.codigo);
      this.form.setValue({
        numero: tarjetaPorEditar?.numero,
        tipo: tarjetaPorEditar?.tipo,
        fecha: tarjetaPorEditar?.fecha,
        codigo: tarjetaPorEditar?.codigo,
        saldo: tarjetaPorEditar?.saldo,
      })
    }else{
      console.log("ES NULL")
    }
  }

}
