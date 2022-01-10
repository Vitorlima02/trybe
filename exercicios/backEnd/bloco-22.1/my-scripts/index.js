const questions = require('./libs/question');
const calculaImc = require('./libs/imc');

const height = questions.askHeight();

const weight = questions.askWeight();

const result = calculaImc(weight, height);

console.log(result);