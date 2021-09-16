import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Rol } from 'src/app/interfaces/rol';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-crear-rol',
  templateUrl: './crear-rol.component.html',
  styleUrls: ['./crear-rol.component.css']
})

/**
 * Clase para el componente de Crear Rol
 * @author Carmen Araya
 * */
export class CrearRolComponent implements OnInit {

  form: FormGroup;
  titulo = 'Agregar Nuevo Rol';
  id: string | null;

  /**
   * Metodo que constructor de la clase
   * @param FormBuilder formulario para crear un elemento
   * @param RolService Servicio del Rol
   * @param router 
   * @param ActivatedRoute 
   * */
  constructor(private fb: FormBuilder, 
    private _rolService: RolService,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
    })
    this.id = this.aRoute.snapshot.paramMap.get("nombre");
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
  agregarEditarRol(){
    if (this.id == null){
      this.agregarRol();
    }else{
      this.editarRol();
    }
  }

  /**
  * Metodo que agrega un nuevo rol al servicio y la carga en la tabla
  * */
  agregarRol(){
    if(this.form.invalid){
      return;
    }
    const rol: Rol = {
      nombre: this.form.value.nombre,
      descripcion: this.form.value.descripcion,
    }
    console.log(rol)
    this._rolService.agregarRol(rol);
    this.router.navigate(['/roles']);
  }


  /**
  * Metodo que edita un rol en el servicio y la actuliza en la tabla
  * */ 
  editarRol(){
    const rol: Rol = {
      nombre: this.form.value.nombre,
      descripcion: this.form.value.descripcion,
    }
    this._rolService.editarRol(rol);
    this.router.navigate(['/roles']);
  }


  /**
  * Metodo que obtiene los datos de una cuenta editada
  * */ 
  esEditar(){
    if(this.id != null){
      this.titulo = "Editar Rol"
      const rolPorEditar = this._rolService.rolEditar(this.id);
      console.log(rolPorEditar?.nombre);
      this.form.setValue({
        nombre: rolPorEditar?.nombre,
        descripcion: rolPorEditar?.descripcion,
      })
    }else{
      console.log("ES NULL")
    }
  }

}
