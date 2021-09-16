import { Component, OnInit } from '@angular/core';
/**
  * @fileoverview Contiene el menú de navegacion
  * se implementa en las paginas dentro de la vista excepto
  * en el login
  * @author Fatima Leiva
  */
@Component({
  selector: 'menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  /**@constructor */
  constructor() { }

  ngOnInit(): void {
  }

}
