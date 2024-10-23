// function nomeCompleto(nome, sobrenome) {
//   document.write(prompt("Olá " + nome + " " + sobrenome));
// }

// nomeCompleto("Marina", "Almeida")

// function texto () {
//     let msg = prompt("Digite uma mensagem: ");
//     document.write(msg);
// }
// texto();



// function soma(num1, num2) {
  
//     document.write(num1 + num2)
   
   
// }
// soma(10, 10);


  
// function soma(x,y){
//     let res = x + y;
//     return res;
// }
// document.write(soma(100,150));



// function confirma(){
//     let r = confirm("Confirma ? ");
//     let p = prompt("Entrada de dados ? ");
//     alert("alerta");
// }
// confirma();


// let multi = (n1 ,n2) => {
//     let res = n1 * n2;
//     return res;
  
// }
// document.write(multi(20,30));



// function resposta(){
//     let  resp = confirm("O que achou ? ");

//     if(resp){
//         document.write("Você clicou em ok");
//     }else{
//         document.write("Você cancelou");

//     }
//     }
//     resposta();




// // TEMPLATE STRING
// let cidade = "Conquista";
// document.write(`Minha cidade é ${cidade}`);







/*
*CONTEÚDO PROGRAMATICO
*
*Array -> é uma estrutura de dados que armazena um conjunto ordenado de valores
*Manipulaçao de arrays (leght - push - pop - splice )
*Join
*Interaçao de array
*Map

*/


// DEFININDO UM ARRAY
console.log("ARRAY");
let colors = ['Pink', 'Red', 'Green', 'Black'];
console.log(colors);


// ACESSAE ARRAY UTILIZANDO UM ITEM NUMERICO
console.log(colors[2]);

// Length -> identificar o numero de elementos dentro de um array
console.log(colors.length);


// MANIPULAÇAO DE ARRAY

const frutas = ['Maça', 'Banana', 'Pera', 'Melancia'];
console.log(frutas);


// Adiciona um elemento no final


console.log(frutas.push("Abacate"));

// ADICIONAR UM ELEMENTO NO INICIO DO ARRAY
console.log(frutas.unshift("Jaca"));
console.log(frutas);


// REMOVER O PRIMEIRO ELEMENTO DO ARRAY
console.log(frutas.shift());
console.log(frutas);


// REMOVER UM ITEM ESPECIFICO
frutas.slice(2,2);
console.log(frutas)

// SEPARAR ITENS DO ARRAY
console.log(frutas.join(' - '));
document.write(frutas.map(String).join(' - '));

// INTERAÇAO SOBRE ARRAYS

// USANDO UM LOOP FOR
for (let i = 0; i < frutas.length; i++){
    document.write(frutas[i] + " ");
}



// forEach
let carros = ["Jeep", "Onix", "Mercedes", "Ferrari"];
carros.forEach((valor, indice) =>{
document.write(`indice: ${indice} - valor: ${valor} </br>`)
})












