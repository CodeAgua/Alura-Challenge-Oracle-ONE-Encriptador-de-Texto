function encriptarTexto(string) {
  
    string = string.split("e").join("enter");
    string = string.split("i").join("imes");
    string = string.split("a").join("ai");
    string = string.split("o").join("ober");
    string = string.split("u").join("ufat");
    return string;
}

var textoEncriptable = document.querySelector("#boton-encriptar");

    textoEncriptable.addEventListener('click', function(){

    var textarea1 = document.querySelector("#texto-cript");
    var resultEncriptado = document.querySelector(".criptreemplazo-texto");
    var texto1 = textarea1.value;
    resultEncriptado.textContent = encriptarTexto(texto1);
    console.log(texto1);
    texto1.reset();
});

// function capturarTextarea(textarea) {return texto}

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




