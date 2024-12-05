function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:
  return array[array.length - 1];
}
// Pruebas
console.log(devolverUltimoElemento(['azul', 'rojo', 'amarillo'])); // azul
console.log(devolverUltimoElemento([10, 20, 30])); // 10
console.log(devolverUltimoElemento([])); // undefined (si el array está vacío)
module.exports = devolverUltimoElemento;
