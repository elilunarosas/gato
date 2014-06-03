// JavaScript Document
//obtener la posicion y crear una matriz asignandole fila y columna; busca filas y columnas; obtiene filas y columnas
function ObtenPosicion(jugadaHtal, jugadaVcal)
{
   var x, y, fila, columna;
   var posicion = 0;
   matriz = new Array(3)
   for (x = 0; x < 3; x++) 
   {
      matriz[x] = new Array(3)
      for (y = 0; y < 3; y++) 
	  {
         matriz[x][y] = posicion
         posicion ++
      }
   }
   for (x = 0; x < 3; x++) 
   {
      for (y = 0; y < 3; y++)
	   {
         if (matriz[x][y] == jugadaHtal)
         fila = x
         if (matriz[x][y] == jugadaVcal)
            columna = y
      }
   }
   return (matriz[fila][columna])
}
