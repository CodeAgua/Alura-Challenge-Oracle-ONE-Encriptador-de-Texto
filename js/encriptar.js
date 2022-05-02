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
    var resultEncriptado = document.querySelector("#criptreemplazo-texto");
    var texto1 = textarea1.value;
    resultEncriptado.textContent = encriptarTexto(texto1);
});

// function capturarTextarea(textarea) {return texto}