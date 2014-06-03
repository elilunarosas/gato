// JavaScript Document
//Comprueba si es posible colocar 2 marcas en una columna estando la otra posición vacia
function ParejaVertical(tablero, ficha, jugadaHtal) 
{
   var x, y
   for(x = 0; x < 3; x++) 
   {
      if ((tablero.elements[x].value == ficha) && (tablero.elements[x + 3].value == "") && (tablero.elements[x + 6].value == ""))
      if (x != jugadaHtal)
      return (x)
      if ((tablero.elements[x].value == "") && (tablero.elements[x + 3].value == ficha) && (tablero.elements[x + 6].value == ""))
      if ((x + 3) != jugadaHtal)
      return (x + 3)
      if ((tablero.elements[x].value == "") && (tablero.elements[x + 3].value == "") && (tablero.elements[x + 6].value == ficha))
      if ((x + 6) != jugadaHtal)
      return (x + 6)
   }
   return -1
}
