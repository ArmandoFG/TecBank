import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})

/**
 * Clase para el componente de Crear Cliente
 * @author Carmen Araya
 * */
export class CrearClienteComponent implements OnInit {

  tipo: any[] = ['Fisico', 'Juridico' ]
  form: FormGroup;
  id: string | null;
  titulo = "Agregar Empleado";


  /**
   * Metodo que constructor de la clase
   * @param FormBuilder formulario para crear un elemento
   * @param ClienteService Servicio del Cliente
   * @param router 
   * @param ActivatedRoute 
   * */
  constructor(private fb: FormBuilder, 
    private _clienteService: ClienteService,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      cedula: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      tipoCliente: ['', Validators.required],
      ingreso: ['', Validators.required],
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    })
    this.id = this.aRoute.snapshot.paramMap.get("cedula");
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
  agregarEditarCliente(){
    if (this.id == null){
      this.agregarCliente();
    }else{
      this.editarEmpleado();
    }
  }

  /**
  * Metodo que agrega un cliente nuevo al servicio y la carga en la tabla
  * */
  agregarCliente(){
    if(this.form.invalid){
      return;
    }
    const client: Cliente = {
      nombre: this.form.value.nombre,
      cedula: this.form.value.cedula,
      telefono: this.form.value.telefono,
      direccion: this.form.value.direccion,
      tipoCliente: this.form.value.tipoCliente,
      ingreso: this.form.value.ingreso,
      usuario: this.form.value.usuario,
      password: this.form.value.password,
    }
    this._clienteService.agregarCliente(client);
    this.router.navigate(['/clients']);
  }

  /**
  * Metodo que edita un cliente en el servicio y la actuliza en la tabla
  * */ 
  editarEmpleado(){
    const client: Cliente = {
      nombre: this.form.value.nombre,
      cedula: this.form.value.cedula,
      telefono: this.form.value.telefono,
      direccion: this.form.value.direccion,
      tipoCliente: this.form.value.tipoCliente,
      ingreso: this.form.value.ingreso,
      usuario: this.form.value.usuario,
      password: this.form.value.password,
    }
    this._clienteService.editarCliente(client);
    this.router.navigate(['/clients']);
  }

  /**
  * Metodo que obtiene los datos de una cuenta editada
  * */ 
  esEditar(){
    if(this.id != null){
      this.titulo = "Editar Empleado"
      const clientePorEditar = this._clienteService.clienteEditar(this.id);
      console.log(clientePorEditar?.nombre);
      this.form.setValue({
        nombre: clientePorEditar?.nombre,
        cedula: clientePorEditar?.cedula,
        telefono: clientePorEditar?.telefono,
        direccion: clientePorEditar?.direccion,
        tipoCliente: clientePorEditar?.tipoCliente,
        ingreso: clientePorEditar?.ingreso,
        usuario: clientePorEditar?.usuario,
        password: clientePorEditar?.password,
      })
    }else{
      console.log("ES NULL")
    }
  }

}
