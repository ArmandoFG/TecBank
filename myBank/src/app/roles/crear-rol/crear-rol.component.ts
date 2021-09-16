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
export class CrearRolComponent implements OnInit {

  form: FormGroup;
  titulo = 'Agregar Nuevo Rol';
  id: string | null;

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

  ngOnInit(): void {
    this.esEditar();
  }

  agregarEditarRol(){
    if (this.id == null){
      this.agregarRol();
    }else{
      this.editarRol();
    }
  }

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


  editarRol(){
    const rol: Rol = {
      nombre: this.form.value.nombre,
      descripcion: this.form.value.descripcion,
    }
    this._rolService.editarRol(rol);
    this.router.navigate(['/roles']);
  }

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
