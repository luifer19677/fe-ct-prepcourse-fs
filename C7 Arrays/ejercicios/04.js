function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento);
  return array;
}
// Pruebas
console.log(agregarItemAlFinalDelArray(['naranja', 'gris'], 'verde')); // ['naranja', 'gris', 'verde']
console.log(agregarItemAlFinalDelArray([1, 2, 3], 4)); // [1, 2, 3, 4]

module.exports = agregarItemAlFinalDelArray;
