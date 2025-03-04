function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  // Si "num" es divisible entre 3 y 5, retorna "fizzbuzz".
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
}
// Si "num" es divisible entre 3, retorna "fizz".
if (num % 3 === 0) {
    return "fizz";
}
// Si "num" es divisible entre 5, retorna "buzz".
if (num % 5 === 0) {
    return "buzz";
}
// De lo contrario, retorna false.
return false;
}
// Ejemplos de prueba
console.log(fizzBuzz(15)); // "fizzbuzz"
console.log(fizzBuzz(9));  // "fizz"
console.log(fizzBuzz(100)); // "buzz"
console.log(fizzBuzz(7));  // false

module.exports = fizzBuzz;
