window.addEventListener("load", inicio);

let forfaits = localStorage.getItem("numeroForfaits") ? parseInt(localStorage.getItem("numeroForfaits")) : 0;
let socioClub = localStorage.getItem("numeroSociosClub") ? parseInt(localStorage.getItem("numeroSociosClub")) : 0;


function inicio() {
    document.getElementById("enviar").addEventListener("click", ingresar, false);
    document.getElementById("resetFor").addEventListener("click", reiniciar, false);
    document.getElementById("resetSoc").addEventListener("click", reiniciar, false);
    actualizarContadores();
}

function ingresar() {
    var socio = document.getElementById("csocio");
    if (typeof(Storage) !== "undefined") {
        if (socio.checked == false) {
            localStorage.setItem("numeroForfaits", ++forfaits);
        } else {
            localStorage.setItem("numeroSociosClub", ++socioClub);
        }
        actualizarContadores();
    }
}

function reiniciar(e) {
    if (e.target.id == "resetFor") {
        localStorage.removeItem("numeroForfaits");
        forfaits = 0;
    } else {
        localStorage.removeItem("numeroSociosClub");
        socioClub = 0;
    }
    actualizarContadores();
}

function actualizarContadores() {
    document.getElementById("forfaits").innerHTML = forfaits;
    document.getElementById("socios").innerHTML = socioClub;
}
