function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
  if(valor === true) {
    return "Soy verdadero"
}else{
    return "Soy falso";
}
}
let retorna = esVerdadero(true);
console.log(retorna);

module.exports = esVerdadero;
