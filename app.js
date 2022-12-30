let nombre = prompt("Bienvenido a Papel Madera. Ingrese su nombre :");
prompt("Hola " + nombre + " , prosigamos con tu compra?");

function sumar(prod1,prod2,prod3){
    return prod1 + prod2 + prod3
}

let primerProd = Number(prompt("Ingresa el primer precio "))
let segundoProd = Number(prompt("ingresa el segundo precio "))
let tercerProd = Number(prompt("ingresa el tercer precio "))

let PFApagar = sumar(primerProd,segundoProd,tercerProd)

var descuento = PFApagar*0.85

let pagoEfectivo = prompt("abona en efectivo? ")

if (pagoEfectivo ==="si" || pagoEfectivo === "Si" || pagoEfectivo === "SI" || pagoEfectivo === "sI") {
    alert("ha obtenido un descuento del 15% su monto a abonar es: " + descuento, );    
} else {
    alert("su monto a abonar es: " + PFApagar, )
}