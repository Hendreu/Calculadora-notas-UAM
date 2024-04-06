document.addEventListener('DOMContentLoaded', function() {
    var calcularButton = document.getElementById('calcular');
    var resultadoDiv = document.getElementById('resultado');
  
    calcularButton.addEventListener('click', function() {
      var notaA1 = parseFloat(document.getElementById('notaA1').value);
      var notaA2 = parseFloat(document.getElementById('notaA2').value);
      var notaA3 = parseFloat(document.getElementById('notaA3').value);
  
      var media = (notaA1 * 30 + notaA2 * 30 + notaA3 * 40) / 100;
  
      if (!isNaN(media)) {
        if (media >= 0 && media <= 100) {
          if (media >= 70) {
            resultadoDiv.innerText = "Aprovado Média: " + media, "";
          } else {
            resultadoDiv.innerText = "Reprovado Média: " + media, "";
          }
        } else {
          resultadoDiv.innerText = 'Por favor, insira notas válidas (0 a 100)';
        }
      } else {
        resultadoDiv.innerText = 'Por favor, insira todas as notas';
      }
    });
  });
  