//hasta que no carge toda la pagina no ejecutara
window.addEventListener("load",iniciar);

//funcion que cuando se hace click en los distintos botones se ejecuta las funciones de validacion
function iniciar() {
    document.getElementById("botonFecha").addEventListener("click", validarFecha);
    document.getElementById("botonCocinero").addEventListener("click", validarCocinero);
    document.getElementById("botonDestinatario").addEventListener("click", validarDestinatario);
    document.getElementById("botonGramos").addEventListener("click", validarGramos);
    document.getElementById("botonCompo").addEventListener("click", validarCompo);
    document.getElementById("botonNcuenta").addEventListener("click", validarCuenta);

}
//funcion para validar la fecha si el resultado es correcto nos mostrara
//el emoji con el pulgar hacia arriba y si no es valido hacia abajo
function validarFecha() {
    const exp = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}/;
    const fecha = document.getElementById("fecha").value;
    const resultado = document.getElementById("resultadoFecha");

    if (exp.test(fecha)) {
        resultado.innerHTML = "👍";
    } else {
        resultado.innerHTML = "👎";
    }
}

//funcion para validar el cocinero si el resultado es correcto nos mostrara
//el emoji con el pulgar hacia arriba y si no es valido hacia abajo
function validarCocinero(){
    const exp=/^[A-Z]{2}\$\d{4}$/;
    const cocinero = document.getElementById("cocinero").value;
    const resultado = document.getElementById("resultadoCocinero");

    if(exp.test(cocinero)){
        resultado.innerHTML="👍";
    }else{
        resultado.innerHTML="👎";
    }
}

//funcion para validar el destinatario si el resultado es correcto nos mostrara
//el emoji con el pulgar hacia arriba y si no es valido hacia abajo
function validarDestinatario(){
    const exp=/^[A-Z]{2,3}_[a-z]+:\d{4}$/;
    const desti = document.getElementById("destinatario").value;
    const resultado = document.getElementById("resultadoDestinatario");

    if(exp.test(desti)){
        resultado.innerHTML="👍";
    }else{
        resultado.innerHTML="👎";
    }
}

//funcion para validar la composicion si el resultado es correcto nos mostrara
//el emoji con el pulgar hacia arriba y si no es valido hacia abajo
function validarCompo(){
    const exp=/^\d+g([A-Za-z]{1,2}\d*){2}$/;
    const compo = document.getElementById("compo").value;
    const resultado = document.getElementById("resultadoCompo");

    if(exp.test(compo)){
        resultado.innerHTML="👍";
    }else{
        resultado.innerHTML="👎";
    }
}
//funcion para validar los gramos si el resultado es correcto nos mostrara
//el emoji con el pulgar hacia arriba y si no es valido hacia abajo
function validarGramos(){
    const exp=/^(1000|[1-4]\d{3}|5000)$/;
    const gramos = document.getElementById("gramos").value;
    const resultado = document.getElementById("resultadoGramos");

    if(exp.test(gramos)){
        resultado.innerHTML="👍";
    }else{
        resultado.innerHTML="👎";
    }
}
// funcion para validar nuemero de cuenta de EEUU
//no he conseguido implementarlo
function validarCuenta(){
    

}