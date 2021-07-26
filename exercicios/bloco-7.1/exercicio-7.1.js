// function testingScope(escopo) {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testingScope(true);

/*
const testescope = escopo => (escopo ? `Não devo ser utilizada fora do meu escopo (if), ótimo, fui utilizada no escopo !` : `não devo ser utilizada fora meu escopo (else)`);

console.log(testescope(true));
*/


/* 2 - Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>);
 retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
Copie o código abaixo. */

/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`A ordem crescente do numeros é: ${oddsAndEvens.sort((a, b) => a - b)}`); */ // será necessário alterar essa linha 😉

/* Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator . */

/* const number = num => (num > 1) ? num * number(num - 1) : 1;

console.log(number(4)); */

/* Crie uma função que receba uma frase e retorne qual a maior palavra. */
/* 
const longestWord = word => word.split(' ').sort((a, b) => b.length - a.length)[0];  // retorna 'aconteceu'

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); */

/* const phrase = text => {
  let result = '';
  let currentWord = 0;
  let splitPhrase = text.split(' ');

  for (word of splitPhrase) {
    if (word.length > currentWord) {
      currentWord = word.length;
      result = word;
    }
  }
  return result;
}

console.log(phrase("Antônio foi no banheiro e não sabemos o que aconteceu")); */

