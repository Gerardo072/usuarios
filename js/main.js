export let user = [
    //user_id	username	password	full_name	address	email	phone
  
    [100,	"anna0",	    "white00",      "Anna Addison",	    "1325 Candy Rd, San Francisco, CA 96123",	"anna.addison@yahoo.com",	3841019535],
    [101,	"carol1",	    "orange01",	    "Carol Campbell",	"1931 Brown St, Gainesville, FL 85321",	    "carol.campbell@aol.com", 	2548952651],
    [102,	"julia2",	    "yellow02",	    "Julia Jones",	    "1622 Seaside St, Seattle, WA 32569",	    "jolie.jones@msn.com",	    3651469235],
    [103,	"irene3",	    "blue03",	    "Irene Everly",	    "1756 East Dr, Houston, TX 28562",	        "irene.everly@gmail.com",	9859423698],
    [104,	"rachel4",  	"red04",	    "Rachel Rose",	    "1465 River Dr, Boston, MA 43625",	        "rachel.rose@hotmail.com",	2945632543],
    [105,	"sophie5",	    "green05",  	"Sophie Sutton",	"1896 West Dr, Portland, OR 65842",	        "sophie.sutton@yahoo.com",	5169525614],
    [106,	"wendy6", 	    "purple06", 	"Wendy West",	    "1252 Vine St, Chicago, IL 73215",	        "wendy.west@gmail.com",	    6645936156],
  ]
  
  //Elementos del DOM
  //Quey selector agrega o quita contenido del DOM
  
  let caja_texto = document.querySelector('#cj-titulo_texto'); //Agrega o quitar contenido del DOM
  let bt_siguiente = document.querySelector('#bt_siguiente');
  let bt_anterior = document.querySelector('#bt_anterior');
  
//Primer elemento
let usuario=0;
caja_texto.innerHTML = user[usuario][1];

//FUNCION SIGUIENTE
function siguiente(){
  if(usuario<=6){
    usuario++;
    caja_texto.innerHTML = user[usuario][1];
  }
  
}

bt_siguiente.addEventListener('click',siguiente);//<--Boton

//FUNCION ANTERIOR
function anterior(){
  if(usuario >=1){
    usuario--;
    caja_texto.innerHTML = user[usuario][1];
  }
 
}

bt_anterior.addEventListener('click',anterior);//<--Boton
