//variables declaradas e inicializadas
//carta1,carta2,primeraCarta y segundaCarta la inicializamos a null para que no tenga ningun valor valido
let carta1=null;
let carta2=null;
let primeraCarta = null;
let segundaCarta = null;
let numGiradas = 0;
let aciertos = 0;
//array que representan los numeros de las cartas
const numeroCartas = [1,1,2,2,3,3,4,4];

//esta funcion se ejecuta cuando giramos una carta
const girarCarta = (event) => {
    
        //si es la primera carta girada
        if (numGiradas == 1) {
            carta1 = document.getElementById(event.target.id);
            primeraCarta = numeroCartas[event.target.id -1];
            carta1.src =primeraCarta + ".jpg";
            carta1.removeEventListener("click", girarCarta);

        }
        //si es la segunda carta girada 
        else if (numGiradas == 2) {
            carta2 = document.getElementById(event.target.id);
            segundaCarta = numeroCartas[event.target.id -1];
            carta2.setAttribute("src",segundaCarta + ".jpg");
            carta2.removeEventListener("click",girarCarta);

            //comparamos si las cartas son iguales
            if (primeraCarta == segundaCarta) {
                numGiradas = 0;
                aciertos++;
                document.getElementById("aciertos").innerHTML = "Aciertos: " + aciertos;
            } else {
                //si no son iguales las ocultamos despues de uun segundo
                setTimeout(() => {
                    carta1.setAttribute("src","icono.png");
                    carta2.setAttribute("src","icono.png");
                    carta1.addEventListener("click", girarCarta);
                    carta2.addEventListener("click",girarCarta);
                    numGiradas=0;
                }, 1000);
            }
        }
        //incrementamos el contador de las cartas giradas
        numGiradas++
       
    }
    //añadimos escuchadores a cada imagen del juego del 1 al 8
    document.getElementById("1").addEventListener("click", girarCarta);
    document.getElementById("2").addEventListener("click", girarCarta);
    document.getElementById("3").addEventListener("click", girarCarta);
    document.getElementById("4").addEventListener("click", girarCarta);
    document.getElementById("5").addEventListener("click", girarCarta);
    document.getElementById("6").addEventListener("click", girarCarta);
    document.getElementById("7").addEventListener("click", girarCarta);
    document.getElementById("8").addEventListener("click", girarCarta);