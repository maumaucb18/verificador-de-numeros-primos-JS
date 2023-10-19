function verificarPrimo() {
    var inputNumero = document.getElementById("numero");
    var resultadoElement = document.getElementById("resultado");

    // Verificar se o campo está vazio ou não é um número
    if (inputNumero.value.trim() === "" || isNaN(inputNumero.value)) {
        resultadoElement.textContent = "Por favor, insira um número válido.";
        return; 
    }

    var numero = parseInt(inputNumero.value);

    if (numero <= 1) {
        resultadoElement.textContent = "Por favor, insira um número maior que 1.";
    } else {
        var primo = true;
        for (var i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                primo = false;
                break;
            }
        }

        if (primo) {
            resultadoElement.textContent = numero + " é um número primo!";
        } else {
            resultadoElement.textContent = numero + " não é um número primo.";
        }
    }
}

