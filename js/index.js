var textoEncriptable = document.querySelector("#boton-encriptar");

    textoEncriptable.addEventListener('click', function(){

    var textarea1 = document.querySelector("#texto-cript");
    var resultEncriptado = document.querySelector(".criptreemplazo-texto");
    var texto1 = textarea1.value;
    resultEncriptado = encriptarTexto(texto1);
    console.log(resultEncriptado);
    // texto1.reset();
});

// function capturarTextarea(textarea) {return texto}

var textoDesencriptable = document.querySelector("#boton-desencriptar");

    textoDesencriptable = addEventListener('click', function(){

    var textarea2 = document.querySelector("#texto-cript");
    var resultDesencriptado = document.querySelector(".criptreemplazo-texto");
    var texto2 = textarea2.value;
    resultDesencriptado = desencriptarTexto(texto2);
    console.log(resultDesencriptado);
    // texto2.reset();
    });


/* function encriptarTexto(string) {
    string = string.replaceAll(new RegExp("e", "gmi"), "enter");
    string = string.replaceAll(new RegExp("i", "gmi"), "imes");
    string = string.replaceAll(new RegExp("a", "gmi"), "ai");
    string = string.replaceAll(new RegExp("o", "gmi"), "ober");
    string = string.replaceAll(new RegExp("u", "gmi"), "ufat");
    return;
}

// function desencriptarTexto(string) {
    string = string.replaceAll(new RegExp("enter", "gmi"), "e");
    string = string.replaceAll(new RegExp("imes", "gmi"), "i");
    string = string.replaceAll(new RegExp("ai", "gmi"), "a");
    string = string.replaceAll(new RegExp("ober", "gmi"), "o");
    string = string.replaceAll(new RegExp("ufat", "gmi"), "u");
    return;
}
*/

function encriptarTexto(string) {
    string = string.split("e").join("enter");
    string = string.split("i").join("imes");
    string = string.split("a").join("ai");
    string = string.split("o").join("ober");
    string = string.split("u").join("ufat");
    return;
}

function desencriptarTexto(string) {
    string = string.split("enter").join("e");
    string = string.split("imes").join("i");
    string = string.split("ai").join("a");
    string = string.split("ober").join("o");
    string = string.split("ufat").join("u");
    return;
}
