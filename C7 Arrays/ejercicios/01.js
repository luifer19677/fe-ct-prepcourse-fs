function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido.
  // Tu código:
  
  return array[0];
}
// Pruebas
console.log(devolverPrimerElemento(['azul', 'rojo', 'amarillo'])); // azul
console.log(devolverPrimerElemento([10, 20, 30])); // 10
console.log(devolverPrimerElemento([])); // undefined (si el array está vacío)

module.exports = devolverPrimerElemento;
