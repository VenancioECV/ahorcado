const PALABRAS =["hola","estrella","bicho"];
const INICIAR = document.getElementById('iniciojuego');
const espaciodejuego = document.getElementById = ('div1');
let i = Math.floor(Math.random()*PALABRAS.length);
let palabra = PALABRAS[i].split('');
INICIAR.addEventListener('click', ()=>{
    i=1;
    for(i ; i<=palabra.length ; i++){
    const espacio = document.createElement('span');
    espacio.id= "letras"+i;
    let texto = document.createTextNode('_ ');
    espacio.appendChild(texto);
    indiceDePalabra = 0;    
    document.body.appendChild(espacio);
    console.log(espacio.id);
    }

})      