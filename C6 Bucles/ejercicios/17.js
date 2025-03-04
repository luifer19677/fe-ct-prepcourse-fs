function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  switch(color){
    case "Blue":
        return "This is Blue";

    case "Red":
        return "This is Red";

    case "Green":
        return "This is Green";

    case "Orange":
        return "This is Orange";

    default:
        return "Color not found";
}
}
console.log(colors("Blue"));
console.log(colors("Red"));
console.log(colors("Green"));
console.log(colors("Orange"));
console.log(colors("Color not found"));

module.exports = colors;
