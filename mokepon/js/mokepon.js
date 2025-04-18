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
    sectionSeleccionarAtaque.style.display = "flex"

    let sectionSeleccionarMascotaJugador = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascotaJugador.style.display = "none"


    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanmascotaJugador = document.getElementById("mascota-jugador")
   
    
    if (inputHipodoge.checked){
        spanmascotaJugador.innerHTML = "Harry Potter"
        

    } else if (inputCapipepo.checked){
        spanmascotaJugador.innerHTML = "Ron Weasly" 

    } else if (inputRatigueya.checked){
        spanmascotaJugador.innerHTML = "Hermione Granger"

    } else {
        alert("selecciona un Hechicero")

    }
    
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {

    eleccionEnemigo = aleatorio(1,3)
    let spanmascotaEnemigo = document.getElementById
    ("mascota-enemigo")

    if (eleccionEnemigo == 1) {
        spanmascotaEnemigo.innerHTML = "Harry Potter"

    } else if (eleccionEnemigo == 2) {
        spanmascotaEnemigo.innerHTML = "Ron Weasly"

    } else {
        spanmascotaEnemigo.innerHTML = "Hermione Granger"
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

    let sectionMensajes = document.getElementById("resultado")
    let ataquesDelJugador = document.getElementById("ataques-del-jugador")
    let ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    // parrafo.innerHTML = ("Tu Hechicero ataco con " + ataqueJugador + ", El Hechicero del enemigo ataco con " + ataqueEnemigo + ". " + resultado )

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {

    let sectionMensajes = document.getElementById("resultado")

    let parrafoFinal = document.createElement("p")

    let sectionBotonReiniciar = document.getElementById("boton-reiniciar")
    sectionBotonReiniciar.style.display = "flex"

    sectionMensajes.innerHTML = (resultadoFinal)

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