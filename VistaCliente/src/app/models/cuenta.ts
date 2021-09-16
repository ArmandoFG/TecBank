export class Cuenta{
    constructor(
        public numero_cuenta: string,
        public descripcion: string,
        public moneda: string,
        public tipo: string,
        public usuario: string,
        public cantidad: number
    ){}
}