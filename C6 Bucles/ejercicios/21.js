function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  
  // Si el número es menor o igual a 0, no puede ser una potencia de 2.
  if (numero <= 0) {
      return false;
  }

  // Mientras el número sea mayor que 1, seguimos dividiendo entre 2.
  while (numero > 1) {
      // Si el número no es divisible entre 2, no es una potencia de 2.
      if (numero % 2 !== 0) {
          return false;
      }
      // Dividimos el número entre 2.
      numero /= 2;
  }

  // Si llegamos a 1, significa que el número era una potencia de 2.
  return true;
}

// Ejemplos de prueba:
console.log(esPotenciaDeDos(16)); // true
console.log(esPotenciaDeDos(10)); // false
console.log(esPotenciaDeDos(1));  // true
console.log(esPotenciaDeDos(33)); // true
console.log(esPotenciaDeDos(20)); // false

module.exports = esPotenciaDeDos;
