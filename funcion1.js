// JavaScript Document
var jugando = true
// funcion para comprobar la partida
function CompruebaJugada(tablero, ficha) 
{
   var x, y
   //comprueba filas
   for(x = 0; x < 9; x += 3) 
   {
      if ((tablero.elements[x].value == ficha) && (tablero.elements[x + 1].value == ficha))
      if (tablero.elements[x + 2].value == "")
         return (x + 2)
      if ((tablero.elements[x].value == ficha) && (tablero.elements[x + 2].value == ficha))
      if (tablero.elements[x + 1].value == "")
         return (x + 1)
      if ((tablero.elements[x + 1].value == ficha) && (tablero.elements[x + 2].value == ficha))
      if (tablero.elements[x].value == "")
      return (x)
   }
   //comprueba columnas
   for(x = 0; x < 3; x++) 
   {
      if ((tablero.elements[x].value == ficha) && (tablero.elements[x + 3].value == ficha))
      if (tablero.elements[x + 6].value == "")
      return (x + 6)
      if ((tablero.elements[x].value == ficha) && (tablero.elements[x + 6].value == ficha))
      if (tablero.elements[x + 3].value == "")
      return (x + 3)
      if ((tablero.elements[x + 3].value == ficha) && (tablero.elements[x + 6].value == ficha))
      if (tablero.elements[x].value == "")
      return (x)
   }
   //comprueba las diagonales
   if ((tablero.elements[2].value == ficha) && (tablero.elements[4].value == ficha) && (tablero.elements[6].value == ""))
   return (6)
   if ((tablero.elements[2].value == ficha) && (tablero.elements[4].value == "") && (tablero.elements[6].value == ficha))
   return (4)
   if ((tablero.elements[2].value == "") && (tablero.elements[4].value == ficha) && (tablero.elements[6].value == ficha))
   return (2)
   if ((tablero.elements[0].value == ficha) && (tablero.elements[4].value == ficha) && (tablero.elements[8].value == ""))
   return (8)
   if ((tablero.elements[0].value == ficha) && (tablero.elements[4].value == "") && (tablero.elements[8].value == ficha))
   return (4)
   if ((tablero.elements[0].value == "") && (tablero.elements[4].value == ficha) && (tablero.elements[8].value == ficha))
   return (0)
   return -1
}
