function obtenerAreaRectangulo(alto, ancho) {
  // La función recibe dos argumentos llamados "alto" y "ancho" los cuales son numeros.
  // Retornar el área de un rectángulo teniendo su alto y ancho.
  // Por ejemplo: 
  // 2, 2 ---> 4
  // 0, 2 ---> 2
  // Tu código:
  return alto * ancho;
}
console.log("El area del rectangulo es: ",obtenerAreaRectangulo(10,5));

module.exports = obtenerAreaRectangulo;
