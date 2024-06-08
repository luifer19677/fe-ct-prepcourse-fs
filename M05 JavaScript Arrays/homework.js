/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}
let arreglo = devolverPrimerElemento([10,15,47,-89,66,-20]); 

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   if (array.length === 0) {
      return undefined;
      } else {
      return array[array.length - 1];
      }
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   const arrayIncrementado = array.map(function(elemento) {
      return elemento + 1;
      });
      return arrayIncrementado;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(" ");
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   const estaPresente = array.includes(elemento);
   return estaPresente;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   const sumaTotal = arrayOfNums.reduce(function(acumulado, actual) {
      return acumulado + actual;
      }, 0);
      return sumaTotal;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   const sumaTotal = resultadosTest.reduce((acumulado, actual) => acumulado + actual, 0);
   const promedio = sumaTotal / resultadosTest.length;
   return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   const numeroMaximo = Math.max(...arrayOfNums);
   return numeroMaximo;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0) {
      return 0; // No se han pasado argumentos, retornar 0
      } else if (arguments.length === 1) {
      return arguments[0]; // Solo un argumento, retornarlo
      } else {
      // Múltiples argumentos, realizar la multiplicación
      let producto = 1;
      for (let i = 0; i < arguments.length; i++) {
        producto *= arguments[i];
      }
      return producto;
      }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let mayoresDe18 = 0;
   for (let numero of array) {
      if (numero > 18) {
      mayoresDe18++;
      }
   }
   return mayoresDe18;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   // Validar que el dia sea un número entre 1 y 7
   if (dia < 1 || dia > 7) {
   return "Dia inválido";
   }

 // Verificar si es fin de semana (Sábado o Domingo)
   if (dia === 6 || dia === 7) {
   return "Es fin de semana";
   } else {
   return "Es día laboral";
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   // Convertir el número a string
   const numeroString = numero.toString();

  // Verificar si el primer caracter es un "9"
   return numeroString.charAt(0) === "9";
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   // Inicializar un array vacío para almacenar los meses encontrados
   const mesesEncontrados = [];

  // Recorrer el array original
   for (const mes of meses) {
    // Verificar si el mes actual es "Enero", "Marzo" o "Noviembre"
      if (mes === "Enero" || mes === "Marzo" || mes === "Noviembre") {
      // Si se encuentra el mes, agregarlo al array de meses encontrados
      mesesEncontrados.push(mes);
      }
   }

  // Verificar si se encontraron todos los meses
   if (mesesEncontrados.length === 3) {
    return mesesEncontrados; // Retornar el array con los meses encontrados
   } else {
    return "No se encontraron los meses pedidos"; // No se encontraron todos los meses
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   // Inicializar un array vacío para almacenar los resultados
   const tabla = [];

  // Recorrer desde el 0 hasta el 60 (inclusive)
   for (let i = 0; i <= 60; i++) {
    // Calcular la multiplicación del 6 por el índice actual
    const resultado = 6 * i;

    // Agregar el resultado al array
      tabla.push(resultado);
   }

  // Retornar el array con la tabla de multiplicar
   return tabla;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   // Inicializar un array vacío para almacenar los valores mayores a 100
   const mayoresA100 = [];

  // Recorrer el array original
   for (const numero of numeros) {
    // Verificar si el número actual es mayor a 100
      if (numero > 100) {
      // Si es mayor, agregarlo al array de valores mayores a 100
      mayoresA100.push(numero);
      }
   }

  // Retornar el array con los valores mayores a 100
   return mayoresA100;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   // Inicializar variables
   let numero = numeroInicial;
   let suma = numero;
   let iteraciones = 0;
   const resultado = [];

  // Bucle con condición de parada
   while (iteraciones < 10 && numero !== suma) {
    // Aumentar el número y la suma
      numero += 2;
      suma += numero;

    // Guardar el número en el array
      resultado.push(numero);

    // Incrementar la cantidad de iteraciones
      iteraciones++;
   }

  // Verificar si se interrumpió la ejecución
   if (numero === suma) {
      return "Se interrumpió la ejecución";
   } else {
      return resultado;
   }
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   // Inicializar variables
   let numero = numeroInicial;
   let suma = numero;
   let iteraciones = 0;
   const resultado = [];

  // Bucle con condición de parada
   while (iteraciones < 10 && numero !== suma) {
    // Aumentar el número y la suma
      numero += 2;
      suma += numero;

    // Omitir la iteración 5
      if (iteraciones === 4) {
      iteraciones++; // Se incrementa el contador de iteraciones sin agregar el número
      continue; // Se continúa con la siguiente iteración del bucle
      }

    // Guardar el número en el array
      resultado.push(numero);

    // Incrementar la cantidad de iteraciones
      iteraciones++;
   }

  // Verificar si se interrumpió la ejecución
   if (numero === suma) {
      return "Se interrumpió la ejecución";
   } else {
      return resultado;
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
