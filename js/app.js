

//funcion para validar la cadena 
function validarCadenaTexto() {
    const encriptador_texto = document.getElementById('encriptador_texto');
    // console.log(cadena);
    encriptador_texto.value = encriptador_texto.value.replace(/[^a-z\s]/g, '').toLowerCase();
    
}

// Funcion que encripta la cadena en el campo de texto
function encriptar() {
    
    //obtener el valor del campo a encriptar
    const textoAEncriptar=document.getElementById('encriptador_texto').value.toLowerCase();

    //para mezclar la llave
    /*
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
    */
    const cadenaMezclada=textoAEncriptar.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat');
    //regresar la nueva cadena ya con la encriptacion
    const cadenaEncriptada=document.getElementById('resultadoTexto').innerText=cadenaMezclada;
    checarContenidoTexto();
    
   
    
} 

//Funcion para descriptar 

function desencriptar() {
    const cadenaDesencriptar = document.getElementById('encriptador_texto').value;
    try{
        let cadenaDesencriptada=cadenaDesencriptar.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
        document.getElementById('resultadoTexto').innerText=cadenaDesencriptada;
    }
    catch (e)
    {
        document.getElementById('resultadoTexto').innerText = 'Valores invalidos , no se puede realizar la operación';
    }
}

//Funcion para deshabilitar la imagen 

function ocultaImagen() {
    document.getElementById("encriptador__resultado__image").style.display = "none";
    document.getElementById("encriptador__resultado__copy-button").style.display="block";
}

//muestra la imagen
function muestraImagen() {
    if(window.innerWidth>=1024){
        document.getElementById("encriptador__resultado__image").style.display = "block";
    }
    else{
        document.getElementById("encriptador__resultado__image").style.display = "none";
    }
}

function checarContenidoTexto() {
    let texto = document.getElementById("encriptador_texto").value;

    if (texto.length === 0) {
        muestraImagen(); // Habilitar imagen si el textarea está vacío
    } else {
        ocultaImagen(); // Deshabilitar imagen si hay texto
    }
}
//Funcion para copiar el texto del area de resultado borra el contenido
//de la caja de texto y manda el enfoque

function copiarTexto() {
    const textoCopiar = document.getElementById('resultadoTexto').innerText;
    let texto = document.getElementById("encriptador_texto");
    navigator.clipboard.writeText(textoCopiar).then(() => {
        alert('Texto copiado al portapapeles');
        texto.value='';
        texto.focus();
    }).catch(err => {
        alert('Error al copiar el texto: ' + err);
    });
}

//escuchando los eventos cuando se cargue y cuando se cambie el tamñano de 
//la pantalla

window.addEventListener('resize', () => {
    checarContenidoTexto();
});

window.addEventListener('load', () => {
    checarContenidoTexto();
});


