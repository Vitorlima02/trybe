//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// let number = 5;
// let linhas = "";

// for (let index = 1; index <= number; index += 1) {
//   linhas += "*";
//   console.log(linhas);
// }
// linhas = "";

//3- Agora inverta o lado do triângulo. Por exemplo:

// let number = 5;
// let linhas = "";

// for (let indexLinha = 0; indexLinha < number; indexLinha += 1) {
//   for (let indexColun = 1; indexColun <= number; indexColun += 1) {
//     if (indexColun < number - indexLinha) {
//       linhas += " ";
//     } else {
//       linhas += "*";
//     }
//   }
//   console.log(linhas);
//   linhas = "";
// }

//4- Depois, faça uma pirâmide com n asteriscos de base:

let number = 5;
let linhas = "";

for (let index = 0; index < number; index += 1) {
  for (let index = number; index < 1; index -= 1 ) {
    if (index % 2 === 0) {
      linhas += " ";
    } else if (index % 2 === 1) {
      linhas += "*";
    }
    console.log(linhas);
  }
}

