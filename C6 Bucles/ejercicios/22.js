function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let contador = 0;  // Inicializamos un contador para asegurarnos de que el bucle no se repita más de 8 veces.
    
    // Bucle do-while que se ejecuta 8 veces o hasta que "contador" llegue a 8.
    do {
      num += 5;  // Aumentamos el valor de "num" en 5.
      contador++;  // Incrementamos el contador.
    } while (contador < 8);  // Continuamos mientras el contador sea menor que 8.
    
    // Retornamos el valor final de "num".
    return num;
}
// Ejemplo de uso:
console.log(doWhile(10));  // Este ejemplo comenzará con 10 y lo aumentará 8 veces en 5. Debería devolver 50.
module.exports = doWhile;