"use strict";
class Armario {
    constructor(puerta, cajones, nombre) {
        this.puerta = puerta;
        this.cajones = cajones;
        this.nombre = nombre;
    }
    imprimir() {
        console.log(`El armario tien ${this.puerta}, ${this.cajones}, ${this.nombre}`);
    }
}
let habitacion = new Armario(2, 4, "Armario de habitación");
console.log(habitacion);
habitacion.imprimir();
