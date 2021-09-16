import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
 /**
  * @fileoverview Login del usuario, obtiene el usuario y su contraseña
  * @author Fatima Leiva
  */
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, DoCheck, OnDestroy {
/** @constructor */
  constructor() { }
  /**
   * Se ejecuta cuando se ejecuta el proyecto, una vez despues
   * del constructor
   */
  ngOnInit(): void {
    console.log("se inicializa");
  }
  /**
   * Se ejecuta cuando se cambia algo en el programa
   */
  ngDoCheck(): void{
    console.log("docheck ejecutado");
  }

  ngOnDestroy(): void{
    
  }
  /**
   * Valida que el usuario existe efectivamente
   */
  validarUsuario(){
    console.log("Se está validando usuario, existe o no existe");
  }
  /**
   * Se ejecuta cuando el botón de inicio es presionado
   * y abre la ventana del cliente
   */
  abrirPaginaPrincipal(){
    console.log("Abriendo principal");
  }

}
