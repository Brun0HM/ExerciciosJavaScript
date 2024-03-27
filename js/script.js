exercicio1 = () => {
    document.getElementById("resposta").innerHTML = "<h2>Resposta da Atividade</h2>"
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `#${i}, `;
  }
};

exercicio2 = () => {
    document.getElementById("resposta").innerHTML = "<h2>Resposta da Atividade</h2>"
  for (let o = 0; o < document.getElementById("num").value; o+= 2) 
    document.getElementById("resposta").innerHTML += `#${o}`
      }
  
      exercicio3 = () => {
    document.getElementById("resposta").innerHTML = "<h2>Resposta da Atividade</h2>"

      }