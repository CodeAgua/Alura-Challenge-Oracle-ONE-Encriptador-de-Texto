function encriptarTexto(string) {
  
    string = string.split("e").join("enter");
    string = string.split("i").join("imes");
    string = string.split("a").join("ai");
    string = string.split("o").join("ober");
    string = string.split("u").join("ufat");
    return string;
}

function desencriptarTexto(string) {
    
    string = string.split("enter").join("e");
    string = string.split("imes").join("i");
    string = string.split("ai").join("a");
    string = string.split("ober").join("o");
    string = string.split("ufat").join("u");
    return string;
}

function capturarTextarea(textarea) {
    var texto = textarea.value;
    return texto;
}

var textoEncriptable = document.querySelector("#boton-encriptar");
var textarea = document.querySelector("#texto-cript");

    textoEncriptable.addEventListener('click', function(){

    var resultEncriptado = document.querySelector("#criptreemplazo-texto");
    resultEncriptado.textContent = encriptarTexto(capturarTextarea(textarea));
});

var textoDesencriptable = document.querySelector("#boton-desencriptar");

    textoDesencriptable.addEventListener('click', function(){

    var resultDesencriptado = document.querySelector("#criptreemplazo-texto");
    resultDesencriptado.textContent = desencriptarTexto(capturarTextarea(textarea));
    });

new ClipboardJS(".btn");

