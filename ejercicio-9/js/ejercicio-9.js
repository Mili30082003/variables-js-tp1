let frase = prompt("Ingresa una frase:");
let vocales = frase.match(/[aeiou]/gi);

if (vocales !== null) {
    document.write("Las vocales en la frase son: " + vocales.join(" "));
} else {
    document.write("No se encontraron vocales en la frase.");
}

