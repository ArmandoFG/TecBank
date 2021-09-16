import { Component, OnInit } from '@angular/core';
import { Menu } from './interfaces/menu';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myBank';
  menu: Menu[] = [];

  constructor(private _menuService: MenuService){}
  
  ngOnInit(): void{
    this.cargarMenu();
  }

  cargarMenu(){
    this._menuService.getMenu().subscribe( data => { 
      this.menu = data;
    })
  }
}


