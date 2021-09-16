import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, DoCheck, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log("se inicializa");
  }

  ngDoCheck(): void{
    console.log("docheck ejecutado");
  }

  ngOnDestroy(): void{
    
  }

  validarUsuario(){
    console.log("Se está validando usuario, existe o no existe");
  }

  abrirPaginaPrincipal(){
    console.log("Abriendo principal");
  }

}
