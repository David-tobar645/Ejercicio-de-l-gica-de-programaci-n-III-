
let numero = prompt("ingrese un número:");
while (isNaN(numero)){
    numero = prompt("Error. Ingrese un numero correcto")
}

function factorial (mumero) {
    var acumulador = 1
    var i = numero
    while (i > 1) {
        acumulador *=i;
        i = i - 1;
    }
const resultado = `El factorial de ${numero} es ${acumulador}`; 

}

factorial(numero);







