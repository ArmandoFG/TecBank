import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export class PeticionCuenta{
    public url:string;
    constructor(
        public _http: HttpClient
    ){
        this.url= "https://localhost:44338/"
    }

    getMovimiento(): Observable<any>{
        return this._http.get(this.url+'api/movimiento/obtenermov')
    }
    getMovimientox(number: string):Observable<any>{
        return this._http.get(this.url+'api/movimiento/obtenermov'+number)
    }
    postMovimiento(user: any):Observable<any>{
        let params= JSON.stringify(user);
        let header= new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'api/movimiento/addmov', params, {headers:header});
    }
}
