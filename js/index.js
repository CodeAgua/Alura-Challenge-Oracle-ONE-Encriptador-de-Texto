var textoEncriptable = document.querySelector("#boton-encriptar");

textoEncriptable.addEventListener('click', function(){
    var textarea1 = document.querySelector("#texto-cript");
    var texto1 = textarea1.value;
    var resultEncriptado = document.querySelector(".criptreemplazo-texto");
    resultEncriptado.textContent = texto1;
    console.log(texto1);
    console.log(typeof texto1);
    texto1.reset();
});

// function capturarTextarea(textarea) {return texto}

var textoDesencriptable = document.querySelector("#boton-desencriptar");

textoDesencriptable = addEventListener('click', function(){

    var textarea2 = document.querySelector("#texto-cript");
    var texto2 = textarea2.value;
    var resultDesencriptado = document.querySelector(".criptreemplazo-texto");
    resultDesencriptado.textContent = texto2;
    console.log(texto2);
    texto2.reset();
    });


/* function encriptarTexto(textoEncriptable) {
"e" toString "enter"
"i" toString "imes"
"a" toString "ai"
"o" toString "ober"
"u" toString "ufat"


}

function desencriptarTexto(textoDesencriptable) {
"enter" toString "e"
"imes" toString "i"  
"ai" toString "a"  
"ober" toString "o" 
"ufat" toString "u"; 
}
*/