function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  // Usamos find() para encontrar el primer string con más de 5 caracteres
  return array.find(elemento => typeof elemento === "string" && elemento.length > 5) || null;
}
console.log(obtenerPrimerStringLargo(["hola", "mundo", "JavaScript", "code"])); // "JavaScript"
console.log(obtenerPrimerStringLargo(["hi", "ok", "no"])); // null

module.exports = obtenerPrimerStringLargo;
