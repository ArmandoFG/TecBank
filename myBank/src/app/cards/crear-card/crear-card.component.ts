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

/**
 * Clase para el componente de Crear Tarjeta
 * @author Carmen Araya
 * */
export class CrearCardComponent implements OnInit {

  tipo: any[] = ['Credito', 'Debito' ]
  form: FormGroup;
  titulo = "Agregar nueva Tarjeta";
  id: string | null;

  /**
   * Metodo que constructor de la clase
   * @param FormBuilder formulario para crear un elemento
   * @param CardService Servicio de la Tarjeta
   * @param router 
   * @param ActivatedRoute 
   * */
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

  /**
  * Metodo que ejecuta otros metodos al correr la aplicación
  * */
  ngOnInit(): void {
    this.esEditar();
  }

  /**
  * Metodo que ejecuta la accion editar o agregar segun una condicin
  * */
  agregarEditarTarjeta(){
    if (this.id == null){
      this.agregarCard();
    }else{
      this.editarTarjeta();
    }
  }

  
  /**
  * Metodo que agrega una tarjeta nueva al servicio y la carga en la tabla
  * */
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

  /**
  * Metodo que edita una tarjeta en el servicio y la actuliza en la tabla
  * */ 
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
  /**
  * Metodo que obtiene los datos de una cuenta editada
  * */
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
