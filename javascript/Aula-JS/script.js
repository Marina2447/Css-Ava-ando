//alert("Olá Mundo");

document.write("Olá Mundo"); // exibir dentro da página
console.log("Marina - Olá Mundo") // no console do terminal ou do 

// DECLARAÇAO DE VARIAVEIS
/**
 *  VAR - LET - CONST
 *  VAR - Pode ser redeclarada e reatribuida
 *  LET - Não pode ser redeclarada mas pode ser reatribuida
 *  CONST - Não pode ser redecladarada e não pode ser reatribuida
 */







//VAR
var x = 20;
console.log(x)

//LET
let y = 90;
console.log(y)

//CONST
const m = 78;
console.log(m)
// m = 90;





// TIPOS DE DADOS NO JS

/*
*Number - String - Boolean - Undefined - Null
*Undefined -> É usada quando uma variavel foi declarada mas nao foi
* Null -> Variavel não possui valor
*/

console.log("TIPO DE DADOS NO JS");

let num = 90;
let string = "Hello";
let bool = true;
let nulo = null;
let undef;

console.log(typeof num)
console.log(typeof string)
console.log(typeof bool)
console.log(typeof undef)

// ATRIBUIÇAÕ DE VALORES
console.log("ATRIBUIR VALOR");


var num1 = 20;
num1 +=40;
console.log(num1)


//INCREMENTO E DECREMENTO
console.log("INCRENTO E DECREMENTO");


let w = 20;
console.log(++w);
console.log(--w);



// OPERADORES RELACIONAIS
//console.log("OPERADORES RELACIONAIS");

//let num1 = 10;
//let num2 = 15;
//console.log(num1 == num2);
//console.log(num1 != num2);
//console.log(num1 === num2); // Mesmo valor e mesmo tipo
//console.log(num1 <= num2);

// OPERADORES LÓGICOS
//console.log("OPERADORES LÓGICOS");

//console.log(!(num1 === num2)); //Not
//console.log((num1 != num2) && (num1 === num2)); //AND
//console.log((num1 === num2) || (num1 != num2)); //OR

// ESTRUTURA CONDICIONAL
//console.log("Estrutura Condicional");
//if (num1 != num2){
    //console.log("Sao diferentes")
//}else{
 //   console.log("São iguais")
//}

// OPERADOR TERNÁRIO
//console.log("OPERADOR TERNÁRIO")
//let n1 = (num1 < num2) ? "SIM" : "não";
//console.log(n1);

// IF ELSE IF/console.log("IF ELSE IF")
//if(num1 > num2) {
 //   console.log("Num1 > Num2");
//else if(num1 < num2){
  //  console.log("Num1 > Num2");
//}




//SWITCH
//console.log("SWITCH")

//let fruta = "uva";

//switch(fruta) {
    //case "uva":
   // console.log("É uma uva")
  //  break;
    //case "pera":
    //    console.log("É uma pera")
    //    break;
    //    default:
    //        console.log("Procure outra fruta")
//}

//WHILE

//let i = 1;
//while(i < 10){
 //   console.log(i)
 //   i++
//} 

//function calcularSalario(hrsTrabalhadas) {
  //  let salario;

   // if (hrsTrabalhadas <= 40) {
    //    salario = hrsTrabalhadas * 10;
    //} else if (hrsTrabalhadas <= 60) {
   //     salario = 400 + (hrsTrabalhadas - 40) * 15;
  //  } else {
   //     salario = 400 + (20 * 15) + (hrsTrabalhadas - 60) * 25;
   // }

  //  return salario;
//}

// Exemplo de uso
//let horas = 70; // Mude este valor para testar diferentes quantidades de horas
//let salarioCalculado = calcularSalario(horas);
//console.log(`Salário para ${horas} horas trabalhadas: R$ ${salarioCalculado.toFixed(2)}`);

let hrsTrabalhadas = 65; 
let salario;

if (hrsTrabalhadas <= 40) {
    salario = hrsTrabalhadas * 10;
} else if (hrsTrabalhadas > 40 && hrsTrabalhadas <= 60) {
    salario = 400 + (hrsTrabalhadas - 40) * 15;
} else {
    
    let horasExtrasAte60 = 60 - 40; 
    let horasExtrasDepois60 = hrsTrabalhadas - 60; 

    salario = 400 + (horasExtrasAte60 * 15) + (horasExtrasDepois60 * 25);
}

console.log(`Salário para ${hrsTrabalhadas} hrs trabalhadas: R$ ${salario}`);

