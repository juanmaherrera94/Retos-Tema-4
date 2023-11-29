window.addEventListener("load",iniciar);

//funcion que cuando se haga click en el boton enviar se ejecute la funcion validar
function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}
//funcion que valida las funciones para hacer el envio del formulario
function validar(e) {
    if (validaId() == true && validaNombre() == true && validaApellidos() == true && validaFecha() == true && validaCorreo() == true && validaTelefono() == true && validaSocio() == true) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}
// Metododo que valida el nombre  y com que el input se rellena correctamente si no nos dara unos mensajes de error
function validaNombre() {
    const valor = document.getElementById("nombre");
    if (!valor.checkValidity()) {
        if (valor.validity.valueMissing) {
            errores(valor, "errorNombre", "Introduzca un nombre");
        }
        if (valor.validity.patternMismatch) {
            errores(valor, "errorNombre", "El nombre debe tener un maximo de 50 caracteres.");
        }
        return false;
    }else{
        document.getElementById("errorNombre").className = "";
        document.getElementById("errorNombre").innerHTML = "";
        return true;
    }
}
// Metododo que valida el apellido y com que el input se rellena correctamente si no nos dara unos mensajes de error
function validaApellidos() {
    const valor = document.getElementById("apellidos");
    if (!valor.checkValidity()) {
        if (valor.validity.valueMissing) {
            errores(valor, "errorApellidos", "Introduzca un apellido");
        }
        if (valor.validity.patternMismatch) {
            errores(valor, "errorApellidos", "El apellido debe tener un maximo de 50 caracteres.");
        }
        return false;
    }else{
        document.getElementById("errorApellidos").className = "";
        document.getElementById("errorApellidos").innerHTML = "";
        return true;
    }
}
// Metododo que valida la fecha y com que el input se rellena correctamente si no nos dara unos mensajes de error
function validaFecha() {
    const valor = document.getElementById("fecha");
    if (!valor.checkValidity()) {
        if (valor.validity.valueMissing) {
            errores(valor, "errorFecha", "Introduzca una fecha de nacimiento.");
        }
        return false;
    }else{
        document.getElementById("errorFecha").className = "";
        document.getElementById("errorFecha").innerHTML = "";
        return true;
    }
   
}
// Metododo que valida el id y com que el input se rellena correctamente si no nos dara unos mensajes de error
function validaId() {
    const valor = document.getElementById("id");
    if (!valor.checkValidity()) {
        if (valor.validity.valueMissing) {
            errores(valor, "errorID", "Introduzca un id.");
        }
        if (valor.validity.patternMismatch) {
            errores(valor, "errorID", "El id debe tener un formato de diez caracteres, empezando por una letra, ocho números y acabar en una letra.");
        }
        return false;
    }else{
        document.getElementById("errorID").className = "";
        document.getElementById("errorID").innerHTML = "";
        return true;
    }
   
}

// Metododo que valida el correo y com que el input se rellena correctamente si no nos dara unos mensajes de error
function validaCorreo() {
    const valor = document.getElementById("correo");
    if (!valor.checkValidity()) {
        if (valor.validity.valueMissing) {
            errores(valor, "errorCorreo", "Introduzca un correo.");
        }
        if (valor.validity.patternMismatch) {
            errores(valor, "errorCorreo", "El correo debe tener un formato tal que: 'ejemplo1234@example.ex'.");
        }
        return false;
    }else{
        document.getElementById("errorCorreo").className = "";
        document.getElementById("errorCorreo").innerHTML = "";
        return true;
    }
  
}
// Metododo que valida el telefono y com que el input se rellena correctamente si no nos dara unos mensajes de error
function validaTelefono() {
    const valor = document.getElementById("telefono");
    if (!valor.checkValidity()) {
        if (valor.validity.valueMissing) {
            errores(valor, "errorTelef", "Introduzca un telefono.");
        }
        if (valor.validity.patternMismatch) {
            errores(valor, "errorTelef", "El formato del teléfono debe ser: empezar con el simbolo '+', seguido de dos o tres números, despues un simbolo '-' y para terminar nueve números.");
        }
        return false;
    }else{
        document.getElementById("errorTelef").className = "";
        document.getElementById("errorTelef").innerHTML = "";
        return true;
    }
   
}
// Metododo que valida el numero del socio y com que el input se rellena correctamente si no nos dara unos mensajes de error
function validaSocio() {
    const valor = document.getElementById("nsocio");
    if (!valor.checkValidity()) {
        if (valor.validity.valueMissing) {
            errores(valor, "errorSocio", "Introduzca el número de socio.")
        }
        if (valor.validity.rangeOverflow) {
            errores(valor, "errorSocio", "El número debe ser menor o igual que 99999.");

        }
        if (valor.validity.rangeUnderflow) {
            errores(valor, "errorSocio", "El número debe ser mayor o igual que 10000.");
        }
        return false;
    }else{
    document.getElementById("errorSocio").className = "";
    document.getElementById("errorSocio").innerHTML = "";
    return true;
    }
   
}
// funcion que se encarga de mostrar mensajes de error y resaltar los campos cuando hay un error
function errores(valor, id, mensaje) {
    document.getElementById(id).className = "error";
    document.getElementById(id).innerHTML = mensaje;

}