function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if(num >= 100 && num <= 999){
    return true;
}else{
    return false;
}
}
let retorna = tieneTresDigitos(53);
console.log(retorna);

module.exports = tieneTresDigitos;
