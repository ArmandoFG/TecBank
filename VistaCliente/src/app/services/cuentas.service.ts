import { Injectable } from "@angular/core";
import { Cuenta } from "../models/cuenta";

@Injectable()
export class CuentasService{
    public cuentas: Array<Cuenta>;

    constructor(){
        this.cuentas= [
            new Cuenta('11744745','Es una cuenta del TecBank','dolares','debito','Juan Carlos Ramirez', 45000),
            new Cuenta('12985493','Es una cuenta del TecBank','colones','debito','Maria Jose Cespedes', 230000),
            new Cuenta('11844595','Es una cuenta del TecBank','dolares','credito','Miranda Gamboa', 345700)
        ]
    }

    getCuentas(){
        return this.cuentas;
    }
    getTexto(){
        return "Texto desde mi servicio de Cuentas, gracias por existir";
    }
}