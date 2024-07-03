let numero = prompt("Ingresa un número:");

if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
    document.write("El número " + numero + " es divisible por 2, 3, 5 o 7.");
} else {
    document.write("El número " + numero + " no es divisible por 2, 3, 5 ni 7.");
}
