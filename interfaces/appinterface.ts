interface CuerpoMensaje {
  nombre:string,
  poder:string
}


function enviarMensaje (xmen : CuerpoMensaje ) {
  console.log("Enviar mensaje " + xmen.nombre);
}

function enviarPajaro (xmen : CuerpoMensaje ) {
  console.log("Enviar mensaje " + xmen.poder);
}

function enviarTexto (xmen : {nombre:string} ) {
  console.log("Enviar mensaje " + xmen.nombre);
}

let componiendo:CuerpoMensaje = {
  nombre: "Pajaro",
  poder: "Gallina Voladora"
};

enviarMensaje ( componiendo );
enviarPajaro ( componiendo)
