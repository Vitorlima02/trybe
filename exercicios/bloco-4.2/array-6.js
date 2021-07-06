let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numImpar = [];
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 == 1) {
    numImpar.push(numbers[index]);
  }
}
if (numImpar == 0) {
  console.log('Nenhum valor ímpar encontrado.')
}
console.log(numImpar);