var textoEncriptable = document.querySelector("#boton-encriptar");

textoEncriptable.addEventListener('click', function(){
    var textarea1 = document.querySelector("#texto-cript");
    var texto1 = textarea1.value;
    var resultEncriptado = document.querySelector(".criptreemplazo-texto");
    resultEncriptado.textContent = texto1;
    console.log(texto1);
});

// function capturarTextarea(textarea) {return texto}
// document.querySelector('#myspan').textContent = 'newtext';
// textarea.reset();
// span = document.getElementById("myspan");
// txt = document.createTextNode("your cool text");
// span.appendChild(txt);

var textoDesencriptable = document.querySelector("#boton-desencriptar");

textoDesencriptable = addEventListener('click', function(){

    var textarea2 = document.querySelector("#texto-cript");
    var texto2 = textarea2.value;
    var resultDesencriptado = document.querySelector(".criptreemplazo-texto");
    resultDesencriptado.textContent = texto2;
    console.log(texto2);
    });


function encriptarTexto(textoEncriptable) {
    

}

function desencriptarTexto(textoDesencriptable) {
    

}