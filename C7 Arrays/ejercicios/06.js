function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  return array.reverse();
}
// Pruebas
console.log(invertirArray([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(invertirArray(['limon', 'rojo', 'verde'])); // ['verde', 'rojo', 'azul']
console.log(invertirArray([])); // []

module.exports = invertirArray;
