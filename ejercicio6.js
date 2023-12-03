window.addEventListener("load", inicio);

function inicio(){
    document.getElementById('agregar').addEventListener('click', agregarFicha);
}
function agregarFicha() {
    // Obtener valores del formulario
    let titulo = document.getElementById('titulo').value;
    let imagen = document.getElementById('imagen').value;
    let url = document.getElementById('url').value;
    let texto = document.getElementById('texto').value;

    // Crear elemento de ficha
    let ficha = document.createElement('div');
    ficha.classList.add('ficha');

    // Crear contenido de la ficha
    let contenido = `
        <h2>${titulo}</h2>
        <img src="${imagen}" alt="${titulo}">
        <p>${texto}</p>
    `;

    ficha.innerHTML = contenido;

    // Agregar ficha al catálogo
    document.getElementById('catalogo').appendChild(ficha);

    // Limpiar formulario
    document.getElementById('formulario').reset();
}