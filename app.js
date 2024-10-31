/* 
Titulo: Maquina dispensadora
Descripción: 
Se requiere escribir un programa que tenga  las opciones
con los siguientes productos:

1.Gaseosa : S/2.00
2.Papitas: S/3.00
3.Galleta: S/1.00
4.Agua Mineral: S/4.00

El usuario debera ingresar una opcion y luego deberá ingresar la moneda,
solo se admite un valor maximo de moneda de S./5.00.

El programa deberá retornar el vuelto y escribir en pantalla el producto 
que acaba de comprar. 

El programa debe reconocer si el monto de la moneda ingresada es menor al precio del producto elegido debera escribir en pantalla que el saldo es insuficiente.


*/
var dispensador = parseInt(
  prompt(`
  ==========================
  1.Gaseosa: 🥤  S/2.00 
  2.Papitas: 🍟 S/3.00
  3.Galleta: 🍪 S/1.00
  4.Agua Mineral: 🍶 S/4.00
  ==========================
  Ingresa la opcion:
  `)
);

var precio;
switch (dispensador) {
  case 1:
    precio = 2.00;
    alert("Has seleccionado Gaseosa");
    break;
  case 2:
    precio = 3.00;
    alert("Has seleccionado Papitas");
    break;
  case 3:
    precio = 1.00;
    alert("Has seleccionado Galleta");
    break;
  case 4:
    precio = 4.00;
    alert("Has seleccionado Agua Mineral");
    break;
  default:
    alert("Opción inválida");
    throw new Error("Opción inválida");
}

// Solicitar la moneda
var moneda = parseFloat(prompt("Ingresa la moneda (máximo S/5.00):"));

// Verificar si la moneda es válida
if (moneda > 5.00) {
  alert("Solo se admite un valor máximo de moneda de S/5.00");
} else if (moneda < precio) {
  alert("Saldo insuficiente. Necesitas más dinero para comprar este producto.");
} else {
  var vuelto = moneda - precio;
  alert(`Has comprado el producto. Tu vuelto es S/${vuelto.toFixed(2)}`);
}