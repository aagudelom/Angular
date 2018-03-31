"use strict";
function enviarMensaje(xmen) {
    console.log("Enviar mensaje " + xmen.nombre);
}
function enviarPajaro(xmen) {
    console.log("Enviar mensaje " + xmen.poder);
}
function enviarTexto(xmen) {
    console.log("Enviar mensaje " + xmen.nombre);
}
let componiendo = {
    nombre: "Pajaro",
    poder: "Gallina Voladora"
};
enviarMensaje(componiendo);
enviarPajaro(componiendo);
