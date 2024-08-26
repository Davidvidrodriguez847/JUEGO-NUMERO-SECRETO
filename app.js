let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 7;

//En cuanto inicie la pagina, se realizará la función de condiciones iniciales para que se reinicie todo.

//INCIO CONDICIONES INICIALES
condicionesIniciales();

function condicionesIniciales() {
  asignarTextoElemento("h1", "juego del número secreto!");
  asignarTextoElemento("p", `indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}
//FIN CONDICIONES INCIALES

//SE INICIA EL JUEGO AL INGRESAR UN NUMERO Y PRESIONAR EL  EL BOTÓN DE INTENTAR.

//INICIO VERIFICACIÓN DEL NÚMERO EN EL JUEGO

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "el número secreto es menor");
    } else {
      asignarTextoElemento("p", "el número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  return (document.getElementById("valorUsuario").value = "");
}

//FIN VERIFICACIÓN DEL NÚMERO EN EL JUEGO

//SE DEBE REINICIAR EL JUEGO PARA SEGUIR INTENTANTO

// INICIO REINICIO DEL JUEGO

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}

//FIN REINICIO EL JUEGO
