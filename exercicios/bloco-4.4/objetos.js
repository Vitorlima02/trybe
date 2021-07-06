// let player = {
//   name: "Marta",
//   lastName: "Silva",
//   age: 33,
//   bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
//   medals: {
//     silver: 3,
//     gold: 2
//   }
// };

// // console.log('A jogadora' + ' ' + player.name + ' ' + player.lastName + ' ' + 'tem' + ' ' + player.age + ' ' + 'anos de idade');

// console.log('A jogadora' + ' ' + player.name + ' ' + player.lastName + ' ' + 'foi eleita a melhor do mundo por 6 vezes' + ' ' + player.bestInTheWorld);

// console.log('A jogadora possui' + ' ' + player.medals.gold + ' ' + 'medalhas de ouro' + ' ' + 'e' + ' ' + player.medals.silver + ' ' + 'medalhas de prata.');

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge' 
// };

// for (let index in names) {
//   console.log('Olá' + ' ' + names[index]);
// }

// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };

// for (let index in car) {
//   console.log(index, car[index]);
// }

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorrente: 'Sim'
// };

// let secondInfo = {
//   personagem: 'Tio Patinhas',
//   origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim'
// };

// for (let index in info) {
//   console.log(index);
// }

// for (let index in info) {
//   console.log(info[index]);
// }

// console.log(info.personagem + ' ' + 'e' + ' ' + secondInfo.personagem);

// console.log(info.origem + ' ' + 'e' + ' ' + secondInfo.origem);

// console.log(info.nota + ' ' + 'e' + ' ' + secondInfo.nota);

// console.log("Ambos recorrentes.");



function verificaPalindromo(palavra) {
  for (let index in palavra) {
    if (palavra[index] != palavra[(palavra.lenght - 1) - index]) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(verificaPalindromo("arara"));

// let numbers = [2, 3, 6, 7, 10, 1];

// function verificaMaior(numbers) {

// }