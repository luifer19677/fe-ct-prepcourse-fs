/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return (string);
}
var devulve = devolverString('Este es el M03 - JavaScript del curso Henry ');

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   return (x, y);
}
var sum = suma(10,20);

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   return (x - y);
}
var res = resta(59,15);

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   return (x / y);
}
var divi = divide(25,5);

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   return (x * y);
}
var multi = multiplica(12,-9)

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   return (x % y);
}
var resto = obtenerResto(15,9);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
