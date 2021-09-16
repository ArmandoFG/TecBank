import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

/**
  * @fileoverview Hace las peticiones al API que permite
  * hacer el get y post que seran implementadas en los 
  * componentes
  * Debe ser inyectable para poder anadirla a las otras clases
  * @author Fatima Leiva
  */
@Injectable()
export class PeticionCuenta{
    public url:string;
    constructor(
        public _http: HttpClient
    ){
        this.url= "https://localhost:44338/"
    }
    /** Hace un get multivaluado, obtiene todos los valores */
    getMovimiento(): Observable<any>{
        return this._http.get(this.url+'api/movimiento/obtenermov')
    }

    /**Hace un get de un valor, obtiene un item con un id especifico */
    getMovimientox(number: string):Observable<any>{
        return this._http.get(this.url+'api/movimiento/obtenermov'+number)
    }
    /**Hace el post con la informacion que se pase por user
     * @param user: debe ser la estructura en JSON 
     */
    postMovimiento(user: any):Observable<any>{
        let params= JSON.stringify(user);
        let header= new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'api/movimiento/addmov', params, {headers:header});
    }
}
