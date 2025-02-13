let ataqueJugador
let ataqueEnemigo
 

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
}

function seleccionarMascotaJugador() {
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

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
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

    crearMensaje()
}

function crearMensaje() {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = ("Tu mascota ataco con " + ataqueJugador + ", la mascota del enemigo ataco con " + ataqueEnemigo + ". Pendiente🎉")

    sectionMensajes.appendChild(parrafo)
}


window.addEventListener("load", iniciarJuego)