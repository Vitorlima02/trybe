const {
  uppercase
} = require("./exercicio1");

it('letras estão em caixa Alta', (done) => {
  uppercase('test', (word) => {
    expect(word).toBe('TEST');
    done();
  })
})
