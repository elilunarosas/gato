// JavaScript Document
//colocar la marca
function PonerAspa(tablero, posicion) 
{
   if (jugando)
   {
      if (tablero.elements[posicion].value != "")
         //casilla no vacia
         alert('CASILLA MARCADA')
      else 
	  {
         tablero.elements[posicion].value = "X"
         if ( CompruebaVictoria(tablero, "X") )
		 {
            alert('HAZ GANADO EL JUEGO')
            document.marcador.ganadas.value++
            jugando = false
         } 
		 else
            PonerRedondel(tablero)
      }
   } 
   else 
   {
      alert('PARA VOLVER A JUGAR PRESIONA EL BOTON INICIAR JUEGO')
   }
}
