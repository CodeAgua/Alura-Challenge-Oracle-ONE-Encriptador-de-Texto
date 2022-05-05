function encriptarTexto(string) {
    ocultarImagen()
    ocultarBotón()
    string = string.split("e").join("enter");
    string = string.split("i").join("imes");
    string = string.split("a").join("ai");
    string = string.split("o").join("ober");
    string = string.split("u").join("ufat");
    return string;
}

function desencriptarTexto(string) {
    ocultarImagen()
    ocultarBotón()
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

    function copiarTexto() {
        var copyText = document.getElementById("criptreemplazo-texto");
        navigator.clipboard.writeText(copyText.textContent);
        
        var tooltip = document.getElementById("miAvisocopi");
        tooltip.innerHTML = "Copiado: " + copyText.textContent;
        console.log(copyText.textContent);
      }
      
      function textoCopiado() {
        var tooltip = document.getElementById("miAvisocopi");
        tooltip.innerHTML = "Copiar al portapapeles";
      }

      function ocultarImagen() {
        var ocultar = document.getElementById('munieco');
        ocultar.style.display = 'none';
      }

      function ocultarBotón() {
        var ocultar = document.getElementById('boton-copiar');
        ocultar.style.visibility = 'visible';
      }
