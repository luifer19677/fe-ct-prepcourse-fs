function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  if (numero <= 1) {
    return false;  // Los números menores o iguales a 1 no son primos.
  }
  
  // Solo es necesario verificar hasta la raíz cuadrada de "numero"
  // porque si "numero" es divisible por algún número mayor que su raíz cuadrada,
  // entonces necesariamente será divisible por algún número menor.
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;  // Si "numero" es divisible por cualquier número entre 2 y su raíz cuadrada, no es primo.
    }
  }
  
  return true;  // Si no se encontró ningún divisor, "numero" es primo.
}
// Ejemplos de uso:
console.log(esNumeroPrimo(7));  // true
console.log(esNumeroPrimo(10)); // false
console.log(esNumeroPrimo(13)); // true
console.log(esNumeroPrimo(1));  // false

module.exports = esNumeroPrimo;
