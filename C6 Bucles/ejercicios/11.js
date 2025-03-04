function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  return num > 20 && num < 50;
}
console.log(estaEnRango(1255));

module.exports = estaEnRango;
