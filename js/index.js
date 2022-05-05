function encriptarTexto(string) {
    ocultarImagen()
    mostrarTextarea()
    mostrarBoton()
    string = string.split("e").join("enter");
    string = string.split("i").join("imes");
    string = string.split("a").join("ai");
    string = string.split("o").join("ober");
    string = string.split("u").join("ufat");
    return string;
}

function desencriptarTexto(string) {
    ocultarImagen()
    mostrarTextarea()
    mostrarBoton()
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
    resultEncriptado.value = encriptarTexto(capturarTextarea(textarea));
});

var textoDesencriptable = document.querySelector("#boton-desencriptar");

    textoDesencriptable.addEventListener('click', function(){

    var resultDesencriptado = document.querySelector("#criptreemplazo-texto");
    resultDesencriptado.value = desencriptarTexto(capturarTextarea(textarea));
    });

    function copiarTexto() {
        var copyText = document.getElementById("criptreemplazo-texto");
        navigator.clipboard.writeText(copyText.value);
        
        var tooltip = document.getElementById("miAvisocopi");
        tooltip.textContent = "Copiado: " + copyText.value;
        console.log(copyText.value);
      }
      
      function textoCopiado() {
        var tooltip = document.getElementById("miAvisocopi");
        tooltip.textContent = "Copiar al portapapeles";
      }

      function ocultarImagen() {
        var ocultar = document.querySelector(".texto-ocultable");
        ocultar.style.display = "none";
      }

      function mostrarBoton() {
        var mostrarBtn = document.getElementById('boton-copiar');
        mostrarBtn.style.visibility = "visible";
      }

      function mostrarTextarea() {
        var mostrarTxt = document.getElementById("criptreemplazo-texto");
        mostrarTxt.style.visibility = "visible";
      }
