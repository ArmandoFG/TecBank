import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { Cuenta } from 'src/app/interfaces/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-crear-account',
  templateUrl: './crear-account.component.html',
  styleUrls: ['./crear-account.component.css']
})
export class CrearAccountComponent implements OnInit {

  tipo: any[] = ['Ahorros', 'Corriente'];
  tipoMoneda: any[] = ['Dolares', 'Euros', 'Colones'];
  form: FormGroup;
  titulo = 'Agregar Cuenta';
  id: string | null;

  constructor(private fb: FormBuilder, 
    private _cuentaService: AccountService,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.form = this.fb.group({
      numero: ['', Validators.required],
      descripcion: ['', Validators.required],
      tipo: ['', Validators.required],
      moneda: ['', Validators.required],
      cliente: ['', Validators.required],
    })
    this.id = this.aRoute.snapshot.paramMap.get("numero");
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarEditarCuenta(){
    if (this.id == null){
      this.agregarCuenta();
    }else{
      this.editarCuenta();
    }
  }

  agregarCuenta(){
    if(this.form.invalid){
      return;
    }
    const cuenta: Cuenta = {
      numero: this.form.value.numero,
      descripcion: this.form.value.descripcion,
      moneda: this.form.value.moneda,
      tipo: this.form.value.tipo,
      cliente: this.form.value.cliente,
    }
    this._cuentaService.agregarCuenta(cuenta);
    this.router.navigate(['/accounts']);
  }

  editarCuenta(){
    const cuenta: Cuenta = {
      numero: this.form.value.numero,
      descripcion: this.form.value.descripcion,
      moneda: this.form.value.moneda,
      tipo: this.form.value.tipo,
      cliente: this.form.value.cliente,
    }
    this._cuentaService.editarCuenta(cuenta);
    this.router.navigate(['/accounts']);
  }

  esEditar(){
    if(this.id != null){
      this.titulo = "Editar Cuenta"
      const cuentaPorEditar = this._cuentaService.cuentaEditar(this.id);
      console.log(cuentaPorEditar?.numero);
      this.form.setValue({
        numero: cuentaPorEditar?.numero,
        descripcion: cuentaPorEditar?.descripcion,
        moneda: cuentaPorEditar?.moneda,
        tipo: cuentaPorEditar?.tipo,
        cliente: cuentaPorEditar?.cliente,
      })
    }else{
      console.log("ES NULL")
    }
  }

}
