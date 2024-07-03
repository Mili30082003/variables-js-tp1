let numero = prompt("Ingresa un número:");
let divisibles = [];

if (numero % 2 === 0) {
    divisibles.push(2);
}
if (numero % 3 === 0) {
    divisibles.push(3);
}
if (numero % 5 === 0) {
    divisibles.push(5);
}
if (numero % 7 === 0) {
    divisibles.push(7);
}

if (divisibles.length > 0) {
    document.write("El número " + numero + " es divisible por los siguientes números: " + divisibles.join(", "));
} else {
    document.write("El número " + numero + " no es divisible por 2, 3, 5 ni 7.");
}
