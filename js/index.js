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


 function encriptarTexto(textoEncriptable) {
    str = str.replace(new RegExp("e", "gmi"), "enter");
    str = str.replace(new RegExp("i", "gmi"), "imes");
    str = str.replace(new RegExp("a", "gmi"), "ai");
    str = str.replace(new RegExp("o", "gmi"), "ober");
    str = str.replace(new RegExp("u", "gmi"), "ufat");
}

function desencriptarTexto(textoDesencriptable) {
    str = str.replace(new RegExp("enter", "gmi"), "e");
    str = str.replace(new RegExp("imes", "gmi"), "i");
    str = str.replace(new RegExp("ai", "gmi"), "a");
    str = str.replace(new RegExp("ober", "gmi"), "o");
    str = str.replace(new RegExp("ufat", "gmi"), "u");
}