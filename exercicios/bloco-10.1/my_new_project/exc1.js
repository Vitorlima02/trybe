// Exercicios realizados para refazer os exercicios 1 a 5 de Unit Tests

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

module.exports = { sum }
