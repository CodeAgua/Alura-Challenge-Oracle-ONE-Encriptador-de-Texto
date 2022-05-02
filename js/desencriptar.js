function desencriptarTexto(string) {
    
    string = string.split("enter").join("e");
    string = string.split("imes").join("i");
    string = string.split("ai").join("a");
    string = string.split("ober").join("o");
    string = string.split("ufat").join("u");
    return string;
}

var textoDesencriptable = document.querySelector("#boton-desencriptar");

    textoDesencriptable = addEventListener('click', function(){

    var textarea2 = document.querySelector("#texto-cript");
    var resultDesencriptado = document.querySelector(".criptreemplazo-texto").value;
    var texto2 = textarea2.value
    resultDesencriptado.textContent = desencriptarTexto(texto2);
    console.log(texto2);
    texto2.reset();
    });

