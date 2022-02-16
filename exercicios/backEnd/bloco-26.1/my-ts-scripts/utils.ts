import readline from "readline-sync";

function makeError(unity: string) {
  throw new Error(`A unidade ${unity} não é unidade válida.`)
}

function convert(units: string[], valor: number, uBase: string, uConvertion: string): number {

  if (!units.includes(uBase)) makeError(uBase);
  if (!units.includes(uConvertion)) makeError(uConvertion);

  const baseIndex = units.indexOf(uBase);
  const convertionIndex = units.indexOf(uConvertion);
  const exponent = (convertionIndex - baseIndex)

  return valor * Math.pow(10, exponent);
}

function exec(units: string[]) {
  const valor = readline.questionFloat("digite o valor a ser convertido: ");

  const choiceBase = readline.keyInSelect(units, "Escolha um número para a unidade base", { cancel: "SAIR" });

  if (choiceBase === -1) return console.log('Saindo!');

  const choiceConvertion = readline.keyInSelect(units, 'Escolha o número para conversão', { cancel: 'SAIR' });

  if (choiceConvertion === -1) return console.log('Saindo!');

  const uBase = units[choiceBase];
  const uConvertion = units[choiceConvertion];
  const result = convert(units, valor, uBase, uConvertion);

  const message = `${valor}${units[choiceBase]} é igual a ${result}${units[choiceConvertion]}`

  console.log(message);
}

export default {
  convert,
  exec
}