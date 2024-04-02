exercicio1 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `#${i}, `;
  }
};

exercicio2 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  for (let o = 0; o < document.getElementById("num").value; o += 2)
    document.getElementById("resposta").innerHTML += `#${o}`;
};

exercicio3 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let resultado = document.getElementById("resultado");

  if (num <= 0) {
    error.innerText = `Informar número válido, o número ${num} não é positvo.`;
    resultado.innerText = "";
  } else {
    error.innerText = "";
    resultado.innerText = "";
    let primo = true; //Declarei variavel para primo
    for (let i = 2; i < num; i++) {
      if (num % i == 0) primo = false; // % resto da divisão
    }

    primo
      ? (resultado.innerText = `O número ${num} é primo!`)
      : (error.innerText = `O número ${num} não é primo!`);
  }
};

exercicio4 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let resposta = document.getElementById("resultado");

  switch (true) {
    case num <= 0:
      {
        error.innerText = "Insira um número positivo";
      }
      break;
    case num > 0:
      {
        resposta.innerHTML = "";
        for (let i = 0; i <= 10; i++) {
          result = num * i;
          resposta.innerHTML += `${num}X${i}=${result} <br/>`;
          console.log(result);
        }
      }

      break;

    default:
      {
        error.innerText = result;
      }
      break;
  }
};

exercicio5 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let resultado = document.getElementById("resultado");
  i = 0;
  error.innerHTML = "";
  if (num <= 0) {
    error.innerHTML = `<h2>Número invalido</h2>`;
  } else {
    while (i <= num) {
      let impar = true;
      if (num % 2 != 0) impar = false;
      resultado.innerHTML = `<h2>${impar}</h2>`;
      i++;
    }
  }
};

exercicio6 = () => {
  let o = 0;
  let num = document.getElementById("num").value;
  let resultado = document.getElementById("resultado");
  let error = document.getElementById("erro");
  resultado.innerText = "";
  error.innerText = "";
  if (num <= 0) {
    error.innerText = "Error";
  } else {
    while (o < num) {
      resultado.innerText += `#${o}`;
      o += 2;
    }
  }
};

exercicio7 = () => {
  let p = 10;
  let resultado = document.getElementById("resposta");
  resultado.innerText = "";
  while (p > 0) {
    console.log(p);
    resultado.innerText += `#${p}`;
    p--;
  }
};

 exercicio8 = () => {
  document.getElementById("resultado").innerText = ``
  document.getElementById("erro").innerText = ``
  let valor = document.getElementById("palavra").value;
  const palavras = valor.split("");
  const palavrasinv = [];
  for (let i = palavras.length; i >= 0; i--) {
    palavrasinv.push(palavras[i]);
  }

  if (palavras.join("") == palavrasinv.join("")) {
    document.getElementById("resultado").innerText = "Essa palavra é um palíndromo"
  }
   else{
    document.getElementById("erro").innerText = "Essa palavra não é um palíndromo";
  }

exercicio9 = () => {
  let soma = 0
  let resuntado = document.getElementById("resposta")
  for (let i = 1; i <= 100; i++) {
    soma += i
    resuntado.innerHTML = `O valor da soma é de ${soma}`

  }
}
 }

exercicio10 = () => {
  let num = document.getElementById("num")
}