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

//Comprobar la victoria del juego
function CompruebaVictoria(tablero, ficha) {
   var x
   //comprueba las filas
   for(x = 0; x < 9; x += 3) 
   {
      if ((tablero.elements[x].value == ficha) && (tablero.elements[x + 1].value == ficha) && (tablero.elements[x + 2].value == ficha))
      return true
   }
   //comprueba las columnas
   for(x = 0; x < 3; x++) {
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

//formulario forma objeto num propiedad objeto
   function PintarX(whois)
   {
      whois.value="X";     

   }

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