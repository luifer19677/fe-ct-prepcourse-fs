/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   // Crear un nuevo objeto vacío
   const gato = {};

  // Asignar las propiedades "nombre" y "edad" con los valores recibidos
   gato.nombre = nombre;
   gato.edad = edad;

  // Agregar la propiedad "meow" como una función que retorna "Meow!"
   gato.meow = function () {
      return "Meow!";
   };

  // Retornar el objeto "gato"
   return gato;
}

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
    // Crear un nuevo objeto vacío
   const usuario = {};

  // Asignar las propiedades "nombre", "email" y "password" con los valores recibidos
   usuario.nombre = nombre;
   usuario.email = email;
   usuario.password = password;

  // Retornar el objeto "usuario"
   return usuario;
}

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   // Verificar si el objeto recibido es válido
   if (typeof objeto !== "object" || objeto === null) {
   throw new Error("El parámetro 'objeto' debe ser un objeto válido");
   }

 // Agregar la propiedad con el nombre y valor 'null'
   objeto[nombrePropiedad] = null;

 // Retornar el objeto modificado
   return objeto;

}

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   // Verificar si el objeto y el método son válidos
   if (typeof objeto !== "object" || objeto === null || typeof metodo !== "string" || typeof objeto[metodo] !== "function") {
   throw new Error("Los parámetros 'objeto' y 'metodo' deben ser válidos");
   }

 // Invocar el método utilizando la notación de punto y la sintaxis de llamada de función
   objeto[metodo](...argumentos);
}
// Ejemplo de uso
const objPersona = {
   saludar: function () {
      console.log("¡Hola!");
   },
   despedirse: function (nombre) {
      console.log(`¡Adiós, ${nombre}!`);
   },
   };
 ejecutarMetodo(objPersona, "saludar"); // Imprime: "¡Hola!"
 ejecutarMetodo(objPersona, "despedirse", "Juan"); // Imprime: "¡Adiós, Juan!"

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
    // Verificar si el objeto y la propiedad existen y son válidos
   if (typeof objetoMisterioso !== "object" || objetoMisterioso === null || !objetoMisterioso.hasOwnProperty("numeroMisterioso") || typeof objetoMisterioso.numeroMisterioso !== "number") {
   throw new Error("El objeto y la propiedad 'numeroMisterioso' deben ser válidos");
   }

 // Obtener el valor del número misterioso
   const numeroMisterioso = objetoMisterioso.numeroMisterioso;

 // Multiplicar el número misterioso por 5
 const resultado = numeroMisterioso * 5;

 // Retornar el resultado de la multiplicación
   return resultado;
}

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   // Verificar si el objeto y la propiedad existen y son válidos
   if (typeof objeto !== "object" || objeto === null || typeof propiedad !== "string" || !objeto.hasOwnProperty(propiedad)) {
   throw new Error("El objeto y la propiedad deben ser válidos");
   }

 // Eliminar la propiedad del objeto
   delete objeto[propiedad];

 // Retornar el objeto con la propiedad eliminada
   return objeto;
}

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   // Verificar si el objeto es válido
   if (typeof objetoUsuario !== "object" || objetoUsuario === null) {
   throw new Error("El parámetro 'objetoUsuario' debe ser un objeto válido");
   }

 // Verificar si la propiedad "email" existe
   if (!objetoUsuario.hasOwnProperty("email")) {
   return false;
   }

 // Obtener el valor de la propiedad "email"
   const email = objetoUsuario.email;

 // Verificar si el valor de la propiedad "email" está definido
   if (email === undefined || email === null || email.trim().length === 0) {
   return false;
   }

 // Si el email está definido y no es vacío, retornar true
   return true;
}

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   // Verificar si el objeto y la propiedad son válidos
   if (typeof objeto !== "object" || objeto === null || typeof propiedad !== "string") {
   throw new Error("El objeto y la propiedad deben ser válidos");
   }

 // Verificar si la propiedad existe en el objeto
   return objeto.hasOwnProperty(propiedad);
}

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   // Verificar si el objeto y las contraseñas son válidos
   if (typeof objetoUsuario !== "object" || objetoUsuario === null || typeof password !== "string" || password.trim().length === 0) {
   throw new Error("El objeto, las contraseñas deben ser válidas y no estar vacías");
   }

 // Obtener la contraseña del objeto
   const passwordObjeto = objetoUsuario.password;

 // Verificar si las contraseñas coinciden
   return passwordObjeto === password;
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   // Verificar si el objeto y la nueva contraseña son válidos
   if (typeof objetoUsuario !== "object" || objetoUsuario === null || typeof nuevaPassword !== "string" || nuevaPassword.trim().length === 0) {
   throw new Error("El objeto y la nueva contraseña deben ser válidos y no estar vacías");
   }

 // Reemplazar la contraseña en el objeto
   objetoUsuario.password = nuevaPassword;

 // Retornar el objeto con la contraseña actualizada
   return objetoUsuario;
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
    // Verificar si el objeto y el nuevo amigo son válidos
   if (typeof objetoUsuario !== "object" || objetoUsuario === null || !Array.isArray(objetoUsuario.amigos) || typeof nuevoAmigo !== "string" || nuevoAmigo.trim().length === 0) {
   throw new Error("El objeto, los amigos y el nuevo amigo deben ser válidos");
   }

 // Obtener el arreglo de amigos
   const amigos = objetoUsuario.amigos;

 // Agregar el nuevo amigo al final del arreglo
   amigos.push(nuevoAmigo);

 // Retornar el objeto con el arreglo de amigos actualizado
   return objetoUsuario;
}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   // Verificar si el parámetro es un arreglo válido
   if (!Array.isArray(objetoMuchosUsuarios) || objetoMuchosUsuarios.length === 0) {
   throw new Error("El parámetro debe ser un arreglo no vacío");
   }

 // Recorrer el arreglo de usuarios
   for (let usuario of objetoMuchosUsuarios) {
   // Verificar si el usuario es un objeto válido
   if (typeof usuario !== "object" || usuario === null) {
     continue; // Ignorar usuarios no válidos
   }

   // Si el usuario no tiene la propiedad "esPremium" o es falsa, actualizarla a true
   if (!usuario.hasOwnProperty("esPremium") || usuario.esPremium === false) {
      usuario.esPremium = true;
   }
   }

 // Retornar el arreglo de usuarios con la propiedad "esPremium" actualizada
   return objetoMuchosUsuarios;
}

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   // Verificar si el objeto y la propiedad "posts" son válidos
   if (typeof objetoUsuario !== "object" || objetoUsuario === null || !Array.isArray(objetoUsuario.posts)) {
   throw new Error("El objeto y la propiedad 'posts' deben ser válidos");
   }

 // Obtener el arreglo de posts
   const posts = objetoUsuario.posts;

 // Inicializar un acumulador para los likes
   let likesTotales = 0;

 // Recorrer el arreglo de posts
   for (const post of posts) {
   // Verificar si el post es un objeto válido
   if (typeof post !== "object" || post === null || typeof post.likes !== "number") {
     continue; // Ignorar posts no válidos
   }

   // Obtener la cantidad de likes del post actual
   const likesPost = post.likes;

   // Sumar los likes del post actual al acumulador
   likesTotales += likesPost;
   }

 // Retornar la suma total de likes
   return likesTotales;
}

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   objetoProducto.calcularPrecioDescuento = function() {
      const descuento = this.precio * this.porcentajeDeDescuento;
      return this.precio - descuento;
}}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
