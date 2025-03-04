function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  switch(idioma){
    case 'alemán':
        return "Guten Tag!"
    case 'mandarín':
        return "Ni Hao!"
    case 'inglés':
        return "Hello!"
    default:
        return "Hola!"
    
}
}
console.log(saludo('alemán'));
console.log(saludo('mandarín'));
console.log(saludo('inglés'));
console.log(saludo(''));

module.exports = saludo;
