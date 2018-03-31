import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html'
})

export class BodyComponent {
  frase:any = {
    mensaje: "Un gran mensaje para un bloque",
    autor: "Pajaro"
  }

  mostrar:boolean = false;

  personajes:string[] = ["Pajaro", "Volador", "Nido", "Rama", "Arbol"];
}
