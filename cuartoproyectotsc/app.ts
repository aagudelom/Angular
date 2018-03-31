function pintarmensaje(nombre:string, apellido:string = "ninguno", momento?:string){
  if(momento) {
      console.log(`Hola ${nombre} con apellido ${apellido}, esta en el momento ${momento}`);
  }
  console.log(`Hola ${nombre} con apellido ${apellido}`);
}

pintarmensaje("Pedro","pico", "cueva");
pintarmensaje("Pedro","pico");
