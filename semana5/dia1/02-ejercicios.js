//1. Pedir al usuario sus nombres, apellidos y edad cada uno por separado, el resultado deberia ser un console.log, resumiendo los datos del usuario.

let nombres = prompt("Cual es tu nombre?");

let apellidos = prompt("cual es son tus apellidos?");

let edad = prompt("Cual es tu edad?");

console.log(`Bienvenid@: ${nombres} ${apellidos} de ${edad} añoas de edad`);

//a) Qué datos necesito???????
//rpta: la base y la altura
//b) comó puedo tener esos datos??????
//prompt
//c) Esos datos están en la forma que necesito??????
//mejor lo convertimos a number

//manera1, poner + adelante del prompt
// let base = +prompt("Cuál es la base del triángulo?");
// let altura = +prompt("Cuál es la altura del triángulo?");

let base = prompt("Cuál es la base del triángulo?");
let altura = prompt("Cuál es la altura del triángulo?");

//convirtiendo de texto a número
let baseNumero = parseFloat(base);
let alturaNumero = parseFloat(altura);

let resultado = (baseNumero * alturaNumero) / 2;

console.log(resultado);