
function invertString(){
    var inputString = document.getElementById("inputString").value
    var resultado = ""

    for (var i = inputString.length - 1; i >= 0; i--){
        resultado += inputString[i]
    }
    document.getElementById("resultado").innerText = "String invertida:" + resultado
}