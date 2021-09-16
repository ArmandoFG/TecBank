import { Component } from "@angular/core";

@Component({
    selector: 'mi_componente',
    templateUrl: './mi_componente.component.html'
})
export class MiComponente{

    public titulo: string;
    constructor(){
        this.titulo="Diay no se";
        console.log("Se ha cargado el componente");
    }
}