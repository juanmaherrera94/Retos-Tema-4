window.addEventListener("load", inicio);

function inicio() {
    document.getElementById("fruta").addEventListener("click", rellenarBode);
    document.getElementById("noFruta").addEventListener("click", rellenarBode);
    document.getElementById("medico").addEventListener("click", rellenarBode);
    document.getElementById("borrar").addEventListener("click", eliminarBorde);

// Obtiene todas las imagenes y asigna la función informacion al pasar el raton sobre ellas
    let imagenes = document.getElementsByTagName("img");
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener("mouseover", informacion);
    }
}

// La funcion informacion muestra información sobre la imagen cuando se pasa el ratón sobre ella

function informacion(e) {
    let nombre = "";
    switch (e.target.alt) {
        case "luffy":
            nombre = "Este es Luffy y comio fruta del diablo";
            break;
        case "zoro":
            nombre = "Este es Zoro y no comio fruta del diablo";
            break;
        case "nami":
            nombre = "Esta es Nami y no comio fruta del diablo";
            break;
        case "sanji":
            nombre = "Este es Sanji y no comio fruta del diablo";
            break;
        case "doflamingo":
            nombre = "Este es Doflamingo y comio fruta del diablo";
            break;
        case "usoop":
            nombre = "Este es Usoop y no comio fruta del diablo";
            break;
        case "chooper":
            nombre = "Este es Chooper y comio fruta del diablo ademas es medico";
            break;
        case "law":
            nombre = "Este es Law comio fruta del diablo y ademas es medico";
            break;
    }

    document.getElementById("info").getElementsByTagName("p")[0].innerHTML = nombre;
}

// funcion que se encarga de eliminar los bordes de las imagenes
function eliminarBorde() {
    let imagenes = document.getElementsByTagName("img");
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].className = imagenes[i].className.replace("borde", "");
    }
}


// esta funcion resalta las imagenes al agregar la clase borde
function rellenarBode(e) {
    eliminarBorde();
    let seleccion = document.getElementsByClassName(e.target.id);
    for (let i = 0; i < seleccion.length; i++) {
        seleccion[i].className += " borde";
    }
}
