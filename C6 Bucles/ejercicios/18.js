function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  // Si a es mayor que b, intercambiamos sus valores
  if (a > b) {
    [a, b] = [b, a];
}

// Inicializamos el resultado en 1 (la identidad multiplicativa)
let producto = 1;

// Recorremos los números entre a y b (inclusive)
for (let i = a; i <= b; i++) {
    producto *= i; // Multiplicamos el valor de producto por el número actual
}

return producto; 
}
console.log(productoEntreNúmeros(2, 5)); // 120 (2 * 3 * 4 * 5)
console.log(productoEntreNúmeros(3, 3)); // 3 (solo 3)
console.log(productoEntreNúmeros(4, 2)); // 120 (4 * 3 * 2 )

module.exports = productoEntreNúmeros;