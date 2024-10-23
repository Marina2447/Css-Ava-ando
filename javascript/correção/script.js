// let chico = {
//     nome: "Chico",
//     cidade: "Vitória da Conquista",
//     olhos: "verdes",
//     peso: 80,
//     escola: "Senai"
// };


// console.log(`${chico.nome} mora em ${chico.cidade}, tem olhos ${chico.olhos}, pesa ${chico.peso} kg e estuda no ${chico.escola}.`);





// function exibirFrase(nome, cidade, olhos, peso, escola) {
//     return `${nome} mora em ${cidade}, tem olhos ${olhos}, pesa ${peso} kg e estuda no ${escola}.`;
// }


// console.log(exibirFrase("Chico", "Vitória da Conquista", "verdes", 80, "Senai"))


// let inputPlayer1, inputPlayer2 = '';
// let resultados = {
//   pontucaoJogador1: {
//     nomePlayer1: '',
//     vitorias: 0,
//     empates: 0,
//     perdas: 0,
//   },

//   pontucaoJogador2: {
//     nomeplayer2: '',
//     vitorias: 0,
//     empates: 0,
//     perdas: 0,

//   },
// };


// nPlayer1 = prompt('Digite o seu nome, meu caro  amigo!');
// nPlayer2 =  prompt('Digite o  nome do outro  amigo!');
// let palavraOne = prompt('Digite a sua palavra');
// let palavrTwo = prompt('A vez do seu amigo, digitar')
// let scorePlayer1 = computeScore(palavraOne);
// let scorePlayer2  = computeScore(palavrTwo)
// exibirResultado()


// function computeScore(palavraJogador) {
//   let pontos = 0;
//   const pontuacaoLetras = [
//     1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4,
//     10,
//   ];
//   const alfabeto = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];

//   for (let i = 0; i < palavraJogador.length; i++) {
//     let letraAtual = palavraJogador[i].toUpperCase();
//     for (let j = 0; j < alfabeto.length; j++) {
//       if (letraAtual === alfabeto[j]) {
//         pontos += pontuacaoLetras[j];
//       }
//     }
//   }

//   return pontos;
// }


// function exibirResultado() {
//   let {nomePlayer1} = resultados.pontucaoJogador1;
//   let {nomeplayer2} = resultados.pontucaoJogador2;
//   if (scorePlayer1 > scorePlayer2) {
//     nomePlayer1 = nPlayer1;
//     console.log(`Vitoria do jogador ${nomePlayer1}`)
//   } else if (scorePlayer1 < scorePlayer2) {
//     nomeplayer2 = nPlayer2 
//     console.log(`Vitoria do jogador ${nomeplayer2}`)
//   } else if(scorePlayer1 === scorePlayer2){
//     console.log(`${nPlayer1} e ${nPlayer2} empataram)`)
//   }
// }


const estados = [
    { estado: "Bahia", capital: "Salvador" },
    { estado: "São Paulo", capital: "São Paulo" },
    { estado: "Minas Gerais", capital: "Belo Horizonte" },
    { estado: "Rio de Janeiro", capital: "Rio de Janeiro" }
  ];
  
  
  function adivinharCapitais() {
    let acertos = 0;
  
    
    for (let i = 0; i < estados.length; i++) {
      const palpiteCapital = prompt(`Qual é a capital do estado ${estados[i].estado}`);
  
      if (palpiteCapital.toLowerCase() === estados[i].capital.toLowerCase()) {
        alert(`Correto! A capital de ${estados[i].estado} é ${estados[i].capital}`);
        acertos++;
      } else {
        alert(`Errado! A capital de ${estados[i].estado} é ${estados[i].capital}`);
      }
    }
  
   
    alert(`Você acertou ${acertos} de ${estados.length} capitais`);
  }
  
  
  function iniciarJogo() {
    let jogarNovamente = '';
  
    do {
      adivinharCapitais();
      jogarNovamente = prompt("Deseja jogar novamente? Digite 'sim' para continuar ou qualquer outra tecla para sair.");
    } while (jogarNovamente.toLowerCase() === 'sim');
  
    alert("Obrigado por jogar!");
  }
  
  iniciarJogo();