const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

/* const SomaPares = (pares, number) => {
  if (number % 2 === 0) {
    pares += number;
  }
  return pares;
} */

const SomaPares = (pares, number) => (number % 2 === 0) ? pares += number : pares;

const pares = numbers.reduce(SomaPares, 0);
console.log(pares);