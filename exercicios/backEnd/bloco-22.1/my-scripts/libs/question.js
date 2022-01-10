const { question, questionFloat } = require("readline-sync");


const askWeight = () => questionFloat('Qual seu peso?');
const askHeight = () => question('Qual sua altura?');

module.exports = {askHeight, askWeight};