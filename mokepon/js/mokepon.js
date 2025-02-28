let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
 

function iniciarJuego(){

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionBotonReiniciar = document.getElementById("boton-reiniciar")
    sectionBotonReiniciar.style.display = "none"
    

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
    
}

function seleccionarMascotaJugador() {

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "block"

    let sectionSeleccionarMascotaJugador = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascotaJugador.style.display = "none"


    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanmascotaJugador = document.getElementById("mascota-jugador")
   
    
    if (inputHipodoge.checked){
        spanmascotaJugador.innerHTML = "Hipodoge"
        

    } else if (inputCapipepo.checked){
        spanmascotaJugador.innerHTML = "Capipepo" 

    } else if (inputRatigueya.checked){
        spanmascotaJugador.innerHTML = "Ratigueya"

    } else {
        alert("selecciona una mascota")

    }
    
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {

    eleccionEnemigo = aleatorio(1,3)
    let spanmascotaEnemigo = document.getElementById
    ("mascota-enemigo")

    if (eleccionEnemigo == 1) {
        spanmascotaEnemigo.innerHTML = "Hipodoge"

    } else if (eleccionEnemigo == 2) {
        spanmascotaEnemigo.innerHTML = "Capipepo"

    } else {
        spanmascotaEnemigo.innerHTML = "Ratigueya"
    }

}

function ataqueFuego() {
    
    ataqueJugador = "Fuego🔥"
    ataqueAleatorioEnemigo()

}

function ataqueAgua() {

    ataqueJugador = "Agua💧"
    ataqueAleatorioEnemigo()

}

function ataqueTierra() {

    ataqueJugador = "Tierra🌱"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {

    eleccionAtaqueEnemigo = aleatorio(1,3)

    if (eleccionAtaqueEnemigo == 1) {
        ataqueEnemigo = "Fuego🔥"
 
    } else if (eleccionAtaqueEnemigo == 2) {
        ataqueEnemigo = "Agua💧"

    } else if (eleccionAtaqueEnemigo == 3) {
        ataqueEnemigo = "Tierra🌱"
    }

    combate()
}

function crearMensaje(resultado) {

    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")

    parrafo.innerHTML = ("Tu mascota ataco con " + ataqueJugador + ", la mascota del enemigo ataco con " + ataqueEnemigo + ". " + resultado )

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {

    let sectionMensajes = document.getElementById("mensajes")
    let parrafoFinal = document.createElement("p")
    let sectionBotonReiniciar = document.getElementById("boton-reiniciar")
    sectionBotonReiniciar.style.display = "block"

    parrafoFinal.innerHTML = (resultadoFinal)

    sectionMensajes.appendChild(parrafoFinal)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

}

function combate() {

    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    
    if(ataqueJugador == ataqueEnemigo){
        crearMensaje("EMPATE")
        
    } else if(ataqueJugador == "Fuego🔥" && ataqueEnemigo == "Tierra🌱"){
        crearMensaje("GANASTE")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo

    } else if(ataqueJugador == "Agua💧" && ataqueEnemigo == "Fuego🔥"){
        crearMensaje("GANASTE")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo

    } else if(ataqueJugador == "Tierra🌱" && ataqueEnemigo == "Agua💧"){

        crearMensaje("GANASTE")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo

    } else {
      crearMensaje("PERDISTE")
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("🎉🎉Felicidades has ganado la partida🎉🎉")
    } else if (vidasJugador == 0){
        crearMensajeFinal("Lastima😢, has perdido la partida... vuelve a intentarlo👏")
    }
    
}

function reiniciarJuego() {
    location.reload()

}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)