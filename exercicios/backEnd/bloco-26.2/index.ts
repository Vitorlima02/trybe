import readline from 'readline-sync';
import Meses from './Mouths';
import Estacoes from './Seasons';
import { exit } from 'process';
import Pizza from './Pizza';

const mesesNomes = Object.values(Meses).map(item => item);

const escolhaMes = readline.keyInSelect(mesesNomes, 'Escolha seu mês', { cancel: 'SAIR' });

if (escolhaMes === -1) console.log('Escolha um mês válido');


const estacoesSul = {
  [Estacoes.OUTONO]: [Meses.MARCO, Meses.ABRIL, Meses.MAIO, Meses.JUNHO],
  [Estacoes.INVERNO]: [Meses.JUNHO, Meses.JULHO, Meses.AGOSTO, Meses.SETEMBRO],
  [Estacoes.PRIMAVERA]: [Meses.SETEMBRO, Meses.OUTUBRO, Meses.NOVEMBRO, Meses.DEZEMBRO],
  [Estacoes.VERAO]: [Meses.DEZEMBRO, Meses.JANEIRO, Meses.FEVEREIRO, Meses.MARCO],
};

const estacoesNorte = {
  [Estacoes.OUTONO]: estacoesSul[Estacoes.PRIMAVERA],
  [Estacoes.INVERNO]: estacoesSul[Estacoes.VERAO],
  [Estacoes.PRIMAVERA]: estacoesSul[Estacoes.OUTONO],
  [Estacoes.VERAO]: estacoesSul[Estacoes.INVERNO],
};

const hemisferio = {
  'Norte': estacoesNorte,
  'Sul': estacoesSul
};

const escolhaHemisferio = readline.keyInSelect(Object.keys(hemisferio), 'Escolha um hemisfério', { cancel: 'SAIR' })

if (escolhaHemisferio === -1) {
  console.log('Hemisferio inválido');
  exit();  
}

const mes = Object.values(Meses)[escolhaMes];

const hemisphere = Object.keys(Estacoes)[escolhaHemisferio];

console.log(`Mes ${mes}`);
console.log(`Hemisferio ${hemisphere}`);
console.log(`Estacoes:`);

const chosenHemisphereSeasons = Object.values(hemisphere)[escolhaHemisferio]

Object.entries(chosenHemisphereSeasons).map((entry) => {
  const seasons = entry[0];
  const months = entry[1];

  if (months.includes(mes)) console.log(seasons);
  
})

const calabresa: Pizza = {
  flavor: 'Calabresa',
  slices: 8
}

console.log(calabresa);

const marguerita: Pizza = {
  flavor: 'Marguerita',
  slices: 6
}

console.log(marguerita);

const nutella: Pizza = {
  flavor: 'Nutella',
  slices: 4
}

console.log(nutella);