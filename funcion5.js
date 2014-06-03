// JavaScript Document
//poner rodel como marca para que juegue la aplicación
function PonerRedondel(tablero) 
{
   var jugada, jugadaHtal, jugadaVcal
   jugada = CompruebaJugada(tablero, "O")
   if (jugada != -1) 
   {
      tablero.elements[jugada].value = "O"
      alert('LA APLICACIÓN GANA')
      document.marcador.perdidas.value++
      jugando = false
      return 1
   }
   jugada = CompruebaJugada(tablero, "X")
   if (jugada != -1) 
   {
      tablero.elements[jugada].value = "O"
      return 1
   }
   jugadaHtal = ParejaHorizontal(tablero, "O")
   jugadaVcal = ParejaVertical(tablero, "O", jugadaHtal)
   if ((jugadaHtal != -1) && (jugadaVcal != -1)) 
   {
      if ((jugadaHtal != 4) || (jugadaVcal != 4))
	  {
         jugada = ObtenPosicion(jugadaHtal, jugadaVcal)
         tablero.elements[jugada].value = "O"
         return 1
      }
   }
   //la aplicacion coloca 2 en filas colocando la marca en izquierda o derecha
   if ((jugadaHtal != -1) && (jugadaVcal == -1)) 
   {
      if ((jugadaHtal != 2) && (jugadaHtal != 5) && (jugadaHtal != 8))
         tablero.elements[jugadaHtal + 1].value = "O"
      else
         tablero.elements[jugadaHtal - 1].value = "O"
         return 1
   }
   //la aplicación coloca 2 en columnas colocando la marca abajo y arriba
   if ((jugadaHtal == -1) && (jugadaVcal != -1)) 
   {
         if ((jugadaVcal != 6) && (jugadaVcal != 7) && (jugadaVcal != 8))
            tablero.elements[jugadaVcal + 3].value = "O"
         else
            tablero.elements[jugadaVcal - 3].value = "O"
         return 1
   }
   //la aplicación coloca la marca en el centro
   if (tablero.elements[4].value == "") 
   {
      tablero.elements[4].value = "O"
      return 1
   }
   //la aplicación coloca la marca en la primer casilla que este libre
   for (x = 0; x < 9; x++)
   if (tablero.elements[x].value == "")
   {
      tablero.elements[x].value = "O"
      return 1
   }
   alert('TENEMOS EMPATE')
   document.marcador.tablas.value++
   jugando = false
   return -1
}
