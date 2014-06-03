// JavaScript Document
//Comprueba si es posible colocar 2 marcas en una fila estando la otra posición vacia
function ParejaHorizontal(tablero, ficha) 
{
   var x, y
   for(x = 0; x < 9; x += 3) 
   {
      if ((tablero.elements[x].value == ficha) && (tablero.elements[x + 1].value == "") && (tablero.elements[x + 2].value == ""))
      return (x)
      if ((tablero.elements[x].value == "") && (tablero.elements[x + 1].value == ficha) && (tablero.elements[x + 2].value == ""))
      return (x + 1)
      if ((tablero.elements[x].value == "") && (tablero.elements[x + 1].value == "") && (tablero.elements[x + 2].value == ficha))
      return (x + 2)
   }
   return -1
}