function calcularFactorial() {
    var numero = parseInt(document.getElementById("numero").value);
    var factorial = Math.sqrt(2 * Math.PI * numero) * Math.pow((numero / Math.E), numero);
    document.getElementById("resultado").innerHTML = `Factorial de ${numero}: ${factorial}`;
}
