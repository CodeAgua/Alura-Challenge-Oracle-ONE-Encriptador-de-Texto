var textoEncriptable = document.querySelector("#boton-encriptar");

textoEncriptable.addEventListener('click', function(){
    var textarea = capturarTextarea(textarea);
    var resultEncriptado = document.querySelector(".criptreemplazo-texto");
    resultEncriptado.innerHTML = "";
    resultEncriptado.innerHTML = textarea.value;
    console.log(textarea);
});

function capturarTextarea(textarea) {
    var textarea = document.querySelector("#texto-cript");
    var texto = textarea.value;
    return texto
}

// textarea.reset();

var textoDesencriptable = document.querySelector("#boton-desencriptar");

textoDesencriptable = addEventListener('click', function(){

    var textarea = capturarTextarea(textarea);
    var resultDesencriptado = document.querySelector(".criptreemplazo-texto");
    resultDesencriptado.innerHTML = "";
    resultDesencriptado.innerHTML = textarea.value;
    console.log(textarea);
    });


function encriptarTexto(textoEncriptable) {
    

}

function desencriptarTexto(textoDesencriptable) {
    

}