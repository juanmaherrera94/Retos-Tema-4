document.addEventListener("DOMContentLoaded", inicio);
/**
 * tenia problemas y no se me mostraba con load no encontraba el error y le pregunte por que no se ejecutaba a chapgt me dijo que lo que me fallaba
 * era el load y lo he cambiado por el (DOMContentLoaded) esto es lo que me decia:
 * DOMContentLoaded se dispara cuando el DOM (Document Object Model) ha sido completamente construido,
 * lo que ocurre antes de que todos los recursos externos hayan terminado de cargarse. 
 * Esto permite que tu código JavaScript se ejecute más rápidamente, mejorando la percepción de velocidad para el usuario.
 */

function inicio() {
    document.getElementById("ver").addEventListener("click", mostrarInfo);
}

// Funcion que se ejecutara cuando se haga clic en el boton "ver"
function mostrarInfo() {
    // Obtenemos las referencias al formulario y al div donde se mostrara la informacion
    const formulario = document.getElementById('miFormulario');
    const divInformacion = document.getElementById('informacion');
    const elementos = formulario.elements;
    let contador = 1;

    // Recorremos la lista de elementos del formulario
    for (let i = 0; i < elementos.length; i++) {
        // Obtenemos el elemento actual
        let elemento = elementos[i];

        let info = contador + '. ';

        // Verificamos el tipo de elemento y creamos las cadenas
        if (elemento.tagName === 'INPUT') {
            info += 'INPUT. Tipo: ' + elemento.type + '. Nombre: ' + elemento.name + '. Clase: ' + (elemento.className || 'no tiene') + '. Id: ' + (elemento.id || 'no tiene') + '. Valor: ' + elemento.value;
        } else if (elemento.tagName === 'TEXTAREA' || elemento.tagName === 'BUTTON') {
            info += elemento.tagName + '. Clase: ' + (elemento.className || 'no tiene') + '. Id: ' + (elemento.id || 'no tiene') + '. Nombre: ' + (elemento.name || 'no tiene') + '. Valor: ' + elemento.value;
        } else if (elemento.tagName === 'LABEL') {
            info += 'LABEL. Clase: ' + (elemento.className || 'no tiene') + '. Id: ' + (elemento.id || 'no tiene') + '. Nombre: ' + (elemento.name || 'no tiene') + '. Atributo for: ' + elemento.getAttribute('for');
        } else if (elemento.tagName === 'SELECT') {
            info += 'SELECT. Clase: ' + (elemento.className || 'no tiene') + '. Id: ' + (elemento.id || 'no tiene') + '. Nombre: ' + (elemento.name || 'no tiene') + '. Valores: ';
            let opciones = elemento.options;
            for (let j = 0; j < opciones.length; j++) {
                info += opciones[j].value + ' ';
            }
        } else if (elemento.nodeType === 8) { // Es un comentario
            info += 'Comentario. Valor: ' + elemento.nodeValue;
        }

        // Agregamos la informacion al div donde lo mostraremos
        info += '<br>';
        divInformacion.innerHTML += info;
        contador++;
    }
}
