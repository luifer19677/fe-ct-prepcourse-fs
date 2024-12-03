function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
        if (suma > 100) {
            break;
        }
    }
    return suma;
}
console.log(sumarHastaNConBreak(5));  // Esto debería devolver la suma de 1+2+3+4+5, ya que no supera 100
console.log(sumarHastaNConBreak(15)); // Aquí la suma superaría 100, el bucle se detendría

module.exports = sumarHastaNConBreak;
