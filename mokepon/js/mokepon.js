
// variables globales 
let ataqueJugador;
let ataqueOponente;
let vidasJugador = 3
let vidasOponente = 3

//función que inicia el juego y es ejecutada al final cuando ya ha cargado todo el contenido de nuestr página 

function iniciarJuego(){

  //así ocultamos la seccion que aún no necesitamos mostrar
  let sectionSelectAtack = document.getElementById('seleccionar-ataque');
  sectionSelectAtack.style.display = 'none';
  // igual a la anterior
  let sectionReiniciar = document.getElementById('reiniciar');
  sectionReiniciar.style.display = 'none';

  let botonMascotaJugador = document.getElementById('boton-mascota');
  botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
  
  let botonFuego = document.getElementById('boton-fuego');
  botonFuego.addEventListener('click', ataqueFuego);
  let botonAgua = document.getElementById('boton-agua');
  botonAgua.addEventListener('click', ataqueAgua);
  let botonTierra = document.getElementById('boton-tierra');
  botonTierra.addEventListener('click', ataqueTierra);

  let botonReiniciar = document.getElementById('boton-reiniciar')
  botonReiniciar.addEventListener('click', reiniciarJuego);
}

// selección de mascotas 

function seleccionarMascotaJugador(){

  //así ocultamos la seccion que aún no necesitamos mostrar
  let sectionSelectmascota = document.getElementById('seleccionar-mascota');
  sectionSelectmascota.style.display = 'none';

  //así mostramos la seccion que necesitamos
  let sectionSelectAtack = document.getElementById('seleccionar-ataque');
  sectionSelectAtack.style.display = 'block';

  let inputHipodoge = document.getElementById('hipodoge');
  let inputCapipepo = document.getElementById('capipepo');
  let inputRatigueya = document.getElementById('ratigueya');
  let spanMascotaJugador = document.getElementById('mascotaJugador');
  
   if (inputHipodoge.checked) {
     spanMascotaJugador.innerHTML = 'Hipodoge';
   }else if (inputCapipepo.checked){
     spanMascotaJugador.innerHTML = 'Capipepo';
   }else if (inputRatigueya.checked){
     spanMascotaJugador.innerHTML = 'Ratigueya';
   }else{
     alert ("Selecciona una mascota ");
   }
   
   // llamamiento de la función dentro esta otra función de selección de mascotas 
 
   seleccionarMascotaEnenmigo();
}

// selección de mascota enemiga

function seleccionarMascotaEnenmigo(){
  let mascotaAleatoria = aleatorio (1,3);
  let spanMascotaOponente = document.getElementById('mascotaOponente');
  
  if (mascotaAleatoria == 1) {
    spanMascotaOponente.innerHTML = 'Hipodoge';
  } else if (mascotaAleatoria == 2) {
    spanMascotaOponente.innerHTML = 'Capipepo';
  } else {
    spanMascotaOponente.innerHTML = 'Ratigueya';
  }
}

// selección de ataques del jugador 

function ataqueFuego(){
  ataqueJugador = 'Fuego';
  ataqueOponenteAleatorio();
}
function ataqueAgua(){
  ataqueJugador = 'Agua';
  ataqueOponenteAleatorio();
}
function ataqueTierra(){
  ataqueJugador = 'Tierra';
  ataqueOponenteAleatorio();
}

// Ataque del oponente 

function ataqueOponenteAleatorio() {
  let ataqueAleatorio = aleatorio(1,3);
  
  if (ataqueAleatorio == 1) {
    ataqueOponente = 'Fuego';
  }else if (ataqueAleatorio == 2) {
    ataqueOponente = 'Agua';
  }else {
    ataqueOponente = 'Tierra';
  }
  
  combate(alert);
}

// Ganaste, perdiste o empataste?

function combate () {
  let spanVidaJugador = document.getElementById('vidaJugador')
  let spanVidaOponente = document.getElementById('vidaOponente')

  if(ataqueOponente == ataqueJugador){
    crearMensaje ("EMPATE")
  }else if(ataqueJugador== 'Fuego' && ataqueOponente=='Tierra'){
    crearMensaje("GANASTE")
    vidasOponente--
    spanVidaOponente.innerHTML = vidasOponente
  }else if(ataqueJugador=='Agua' && ataqueOponente=='Fuego'){
    crearMensaje("GANASTE")
    vidasOponente--
    spanVidaOponente.innerHTML = vidasOponente
  }else if(ataqueJugador=='Tierra' && ataqueOponente=='Agua'){
    crearMensaje("GANASTE")
    vidasOponente--
    spanVidaOponente.innerHTML = vidasOponente
  }else{
    crearMensaje("PERDISTE")
    vidasJugador --
    spanVidaJugador.innerHTML = vidasJugador
  }
  
  revisarVidas()
}

// Quién ganó el juego?

function revisarVidas() {
  if (vidasOponente == 0) {
    crearMensajeFinal("FELICITACIONES!!! Ganaste :)")
  } else if (vidasJugador == 0){
    crearMensajeFinal("LO SIENTO!!! Perdiste :(")
  }
}

function crearMensaje (resultado) {
  let sectionMensaje = document.getElementById('mensajes');
  
  let parrafo = document.createElement('p');
  parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota oponente atacó con ' + ataqueOponente + '. ' + resultado;
  
  sectionMensaje.appendChild(parrafo);
}

// MENSAJE FINAL

function crearMensajeFinal (resultadoFinal) {
  // Mensaje final
  let sectionMensaje = document.getElementById('mensajes');

  // crea un nuevo párrafo en lugar del original
  let parrafo = document.createElement('p');
  parrafo.innerHTML = resultadoFinal;
  
  sectionMensaje.appendChild(parrafo);

  // para desabilitar los botones cuando las vidas lleguena cero
  let botonFuego = document.getElementById('boton-fuego');
  botonFuego.disabled = true;
  let botonAgua = document.getElementById('boton-agua');
  botonAgua.disabled = true;
  let botonTierra = document.getElementById('boton-tierra');
  botonTierra.disabled = true;

  //así mostramos la seccion que necesitamos
  let sectionReiniciar = document.getElementById('reiniciar');
  sectionReiniciar.style.display = 'block';
}

// reinicio del juego

function reiniciarJuego() {
  location.reload();
}

 //selección aleatoria 

function aleatorio (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//ejecución de la función "iniciar juego", declarada mas arriba de este archivo js.

window.addEventListener('load', iniciarJuego);