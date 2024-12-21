function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputratigueya = document.getElementById("ratigueya")

    if (inputHipodoge.checked){
        alert("seleccionaste a Hipodoge")

    } else if (inputCapipepo.checked){
        alert("seleccionaste a Capipepo")

    } else if (inputratigueya.checked){
        alert("seleccionaste a Ratigueya")

    } else {
        alert("selecciona una mascota")
    }
    
}

window.addEventListener("load", iniciarJuego)