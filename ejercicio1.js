let carta1=null;
let carta2=null;
let primeraCarta = null;
let segundaCarta = null;
let numGiradas = 0;
let aciertos = 0;
const numeroCartas = [1,1,2,2,3,3,4,4];

const girarCarta = (event) => {
    
        if (numGiradas == 1) {
            carta1 = document.getElementById(event.target.id);
            primeraCarta = numeroCartas[event.target.id -1];
            carta1.src =primeraCarta + ".jpg";
            carta1.removeEventListener("click", girarCarta);
        } else if (numGiradas == 2) {
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
                setTimeout(() => {
                    carta1.setAttribute("src","icono.png");
                    carta2.setAttribute("src","icono.png");
                    carta1.addEventListener("click", girarCarta);
                    carta2.addEventListener("click",girarCarta);
                    numGiradas=0;
                }, 1000);
            }
        }
        numGiradas++
       
    }
    document.getElementById("1").addEventListener("click", girarCarta);
    document.getElementById("2").addEventListener("click", girarCarta);
    document.getElementById("3").addEventListener("click", girarCarta);
    document.getElementById("4").addEventListener("click", girarCarta);
    document.getElementById("5").addEventListener("click", girarCarta);
    document.getElementById("6").addEventListener("click", girarCarta);
    document.getElementById("7").addEventListener("click", girarCarta);
    document.getElementById("8").addEventListener("click", girarCarta);