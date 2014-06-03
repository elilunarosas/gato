// JavaScript Document
function ponermarca(tablero, posicion)
{
   if (jugando) 
   {
      if (tablero.elements[posicion].value != "")
         alert('CASILLA MARCADA')
      else
	  {
         tablero.elements[posicion].value = "X";
      }
    } 
   else 
   {
      alert('PARA VOLVER A JUGAR PRESIONA EL BOTON INICIAR JUEGO')
   }
}
