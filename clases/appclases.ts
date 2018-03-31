

class Armario {

  puerta:number;
  cajones:number;
  nombre:string;

  constructor( puerta:number, cajones:number, nombre:string ) {
    this.puerta = puerta;
    this.cajones = cajones;
    this.nombre = nombre;
  }

  imprimir() {
    console.log(`El armario tien ${this.puerta}, ${this.cajones}, ${this.nombre}`);
  }

}

let habitacion:Armario = new Armario( 2, 4, "Armario de habitación");

console.log(habitacion);
habitacion.imprimir();
