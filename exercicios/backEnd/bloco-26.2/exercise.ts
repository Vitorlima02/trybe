enum weekDays {
  Domingo = 1,
  Segunda,
  Terça,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
};

enum coresDoArcoIris {
  Red = 'Vermelho',
  Orange = 'Laranja',
  Yellow = 'Amarelo',
  Green = 'Verde',
  Blue = 'Azul',
  Indigo = 'Anil',
  Violet = 'Violeta',
};

enum Actions {
  Save,
  Print,
  Open,
  View,
  Close,
};

enum pCardial {
  Norte = 'N',
  Leste = 'L',
  Sul = 'S',
  Oeste = 'O',
}

type Bird = {
  family: string,
  class: string,
};

function printStatus(b: Bird) {
  console.log('A familia que o passaro pertence é: ' + b.family);
  console.log('A classe que o passaro pertence é: ' + b.class);
}

printStatus({ family: 'aerials', class: 'attacker' });

type TwoNumbers = {
  num1: number,
  num2: number,
};

function sum(num: TwoNumbers) {
  return num.num1 + num.num2;
};

type Address = {
  street: string,
  number: number,
  city: string,
  district: string,
  zipCode: number,
}

type StateOfMatery = 'Liquid' | 'Gaseous' | 'Solid';

type CPF = string | number;

type SO = 'mac os' | 'linux' | 'windows';

type Vogals = 'a' | 'e' | 'i' | 'o' | 'u';


class Dog {
  name: string;
  race: string;
  flurColor: string;

  constructor(name: string, race: string, flurColor: string) {
    this.name = name;
    this.race = race;
    this.flurColor = flurColor;
  }
}

class House {
  numberOfBedrows: number;
  numberOfToilets: number;

  constructor(numberOfBedrows: number, numberOfToilets: number) {
    this.numberOfBedrows = numberOfBedrows;
    this.numberOfToilets = numberOfToilets;
  }
}

class Voo {
  _numVoo: number;
  _tipoNave: string;
  _qntTurbina: number;
  _possuiPassageiro: boolean;

  constructor(numVoo: number, tipoNave: string, qntTubrina: number, possuiPassageiro: boolean) {
    this._numVoo = numVoo;
    this._tipoNave = tipoNave;
    this._qntTurbina = qntTubrina;
    this._possuiPassageiro = possuiPassageiro;
  }
}

interface Automovel {
  nome: string;
  marca: string;
  cor: string;
  portas: number;
  pneus: number;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
  break: () => void;
}

interface Felino {
  nome: string;
  subFamily: string;
}

