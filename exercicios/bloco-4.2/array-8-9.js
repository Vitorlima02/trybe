let numbers = [];
let divNumber = [];

for (let index = 0; index < 25; index += 1) {
  numbers.push(Math.floor(Math.random() * (100 -1) + 1));
}
for (let index = 0; index < 25; index += 1) {
  divNumber.push(numbers[index] / 2);
}
console.log(numbers);
console.log(divNumber);
