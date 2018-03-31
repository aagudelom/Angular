let miFuncionF = a => a;

console.log( miFuncionF("nombre"));

let miFuncion2 = function (a:number, b:number) {
  return a + b;
}

let mifuncion2F = (a:number, b:number) => a + b;
console.log(mifuncion2F(2,3));
