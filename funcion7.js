// JavaScript Document
//Comprobar la victoria del juego
function CompruebaVictoria(tablero, ficha) 
{
   var x
   //comprueba las filas
   for(x = 0; x < 9; x += 3) 
   {
      if ((tablero.elements[x].value == ficha) && (tablero.elements[x + 1].value == ficha) && (tablero.elements[x + 2].value == ficha))
      return true
   }
   //comprueba las columnas
   for(x = 0; x < 3; x++) 
   {
      if ((tablero.elements[x].value == ficha) && (tablero.elements[x + 3].value == ficha) && (tablero.elements[x + 6].value == ficha))
      return true
   }
   //comprueba las diagonales
   if ((tablero.elements[2].value == ficha) && (tablero.elements[4].value == ficha) && (tablero.elements[6].value == ficha))
      return true
   if ((tablero.elements[0].value == ficha) && (tablero.elements[4].value == ficha) && (tablero.elements[8].value == ficha))
      return true
   return false
}
  var jugando = true ;
