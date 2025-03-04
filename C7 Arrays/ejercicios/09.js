function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   // Generamos un índice aleatorio entre 0 y la longitud del array - 1
   let indice = Math.floor(Math.random() * array.length);
   return array[indice]; // Devolvemos el elemento en esa posición
}
console.log(obtenerElementoAleatorio([1, 5, 8, 9, 7])); // Ejemplo de salida: 8
module.exports = obtenerElementoAleatorio;
