const PALABRAS =["hola","estrella","bicho"];
const INICIAR = document.getElementById('botonDeInicio');
const PROBAR = document.getElementById('botonDeProbar');
const REINICIAR = document.getElementById('botonDeReinicio');
const ESPACIODEINICIO = document.getElementById('espacioDeInicio');
const ESPACIODEJUEGO = document.getElementById('espacioDeJuego');
const ESPACIODEPERDIDA = document.getElementById('espacioDePerdida');
const MENSAJEERROR = document.getElementById('mensajeError');
const CANTDEOPOR = document.getElementById('cantDeOpor');
const imagenAMostrar = document.getElementById('imagen');
const IMAGENES=[ `+---+
|    |
     |
     |
     |
     |
=========`,
`+---+
 |   |
 O   |
     |
     |
     |
=========`,
`+---+
 |   |
 O   |
 |   |
     |
     |
=========`,
`+---+
 |   |
 O   |
/|   |
     |
     |
=========`,
`+---+
 |   |
 O   |
/|\\  |
     |
     |
=========`,
`+---+
 |   | 
 O   |
/|\\  |
/    |
     |
=========`,
`+---+
 |   |
 O   |
/|\\  |
/ \\  |
     |
=========`]
let i = 0;
let oportunidades = 6;
let palabra = [];
i = Math.floor(Math.random()*PALABRAS.length);
palabrafinal=PALABRAS[i];
palabra = PALABRAS[i].split('');
imagenAMostrar.innerText=IMAGENES[0];    
ESPACIODEJUEGO.style.display = 'none';
ESPACIODEPERDIDA.style.display = 'none';
imagenAMostrar.style.display='none';
MENSAJEERROR.style.display = 'none';
console.log(IMAGENES[i]);
INICIAR.addEventListener('click', ()=>{
    generarEspacios(i,palabra); 
    ESPACIODEINICIO.style.display ='none';
    ESPACIODEJUEGO.style.display ='block';
    imagenAMostrar.style.display='block';
})

PROBAR.addEventListener('click',()=>{
    const LETRA = document.getElementsByClassName('letra')
    const INTENTO = document.getElementById('rpDelJugador').value; 
    let j = 0; 
    let k = 0;
    for(i = 0 ; i<palabra.length ; i++){    
        if(LETRA[i].textContent === INTENTO){
            MENSAJEERROR.style.display= 'block';   
        } 
        else if(INTENTO === palabra[i]){            
            LETRA[i].textContent = INTENTO;
            INTENTO.value = '';
            MENSAJEERROR.style.display= 'none';
        }
        else if(INTENTO!=palabra[i]){  
                j=j+1;                                        
                if(j===palabra.length){
                    MENSAJEERROR.style.display= 'block';                    
                    j=0;
                    oportunidades--;
                    let indiceDeImagen = 6 - oportunidades; 
                    imagenAMostrar.innerText=IMAGENES[indiceDeImagen];
                    if(oportunidades == 0){
                        ESPACIODEJUEGO.style.display = 'none';  
                        imagenAMostrar.style.display = 'block'; 
                        ESPACIODEPERDIDA.style.display ='block';
                        document.getElementById('final').innerText="La palabra era "+palabrafinal;
                    }
                }                               
        }            
    }
    CANTDEOPOR.innerHTML = 'Te quedan ' + oportunidades + ' oportunidades';
    for (i = 0; i<palabra.length; i++){
        if(LETRA[i].textContent === palabra[i]){
            k++;
        }
        if(k===palabra.length){
            console.log("Terminao");
        }
    } 
    document.getElementById('rpDelJugador').focus();
    document.getElementById('rpDelJugador').value=''; 
})
function generarEspacios(indice,palabraElegida){
    for(indice=1 ; indice<=palabraElegida.length ; indice++){
        const espacio = document.createElement('span');
        espacio.className = 'letra';
        let texto = document.createTextNode('_ ');        
        espacio.appendChild(texto);
        ESPACIODEJUEGO.appendChild(espacio);
    }
}   