function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   // Usamos indexOf para buscar el índice del número en el array.
   return array.indexOf(num);
}
console.log(encontrarElemento(5, [1, 2, 3, 4, 5])); // 4
console.log(encontrarElemento(10, [1, 2, 3, 4, 5])); // -1

module.exports = encontrarElemento;
