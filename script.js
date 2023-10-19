function verificarPrimo() {
  let numero = parseInt(document.getElementById("numero").value);
  let resultadoElement = document.getElementById("resultado");

  if (numero <= 1) {
      resultadoElement.textContent = "Por favor, insira um número maior que 1.";
  } else {
      let primo = true;
      for ( i = 2; i <= Math.sqrt(numero); i++) {
          if (numero % i === 0) {
              primo = false;
              break;
          }
      }

      if (primo) {
          resultadoElement.textContent = numero + " é um número primo!";
      } else{
          resultadoElement.textContent = numero + " não é um número primo.";
      }
      
  }
}
