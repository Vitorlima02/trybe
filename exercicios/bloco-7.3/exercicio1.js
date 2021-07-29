const assert = require('assert');

const soma = (a, b) => {
  if (typeof b !== 'number' | typeof a !== 'number') {
    throw Error('Parametros devem ser do tipo numericos');
  }
  return a + b;
}

const expected = soma(4, '5');

assert.strictEqual(expected, 9, 'A soma de 4 + 5 = 9');
assert.strictEqual(expected, 0, 'A soma de 0 + 0 = 0');
assert.throws(() => {
  soma(4, '5');
});
assert.throws(() => {
  soma(4, '5');
}, /^Error: Parametros devem ser do tipo numericos$/);
