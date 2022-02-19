import Colors from "./Colors";
import Doors from "./Doors";
import Directions from "./Directions";

class Car {
  _make: string;
  _colors: Colors;
  _doors: number;

  constructor(make: string, colors: Colors, doors: number) {
    this._make = make;
    this._colors = colors;
    this._doors = doors;
  }

  turnOn(): void {
    console.log('Ligando o carro.');
  }

  turnOff(): void {
    console.log('Desligando o carro.');
  }

  turn(direction: Directions): void {
    console.log(`Muda a direção ${direction}`);
  }

  speedUp(): void {
    console.log('Acelera o carro.');
  }

  speedDown(): void {
    console.log('Desacelera o carro.');
  }

  honk(): void {
    console.log('Buzina.');
  }

  openTheDoor(door: Doors): void {
    console.log(`Abre a porta ${door}`);
  }

  closeTheDoor(door: Doors): void {
    console.log(`Fecha a porta ${door}`)
  }

  stop(): void {
    console.log('Para o carro.');
    
  }
}
