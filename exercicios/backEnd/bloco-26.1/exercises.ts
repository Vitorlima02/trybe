import { homedir } from "os";

export function greeter(name: string) {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number) {
  return `olá ${name} vc está com ${age} agora!`;
}

export function add(a: number, b: number): number {
  return a + b;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangleArea(base: number, height: number): number {
  return (base * height) / 2;
}

export function squareArea(side: number): number {
  return side ** 2;
}

export function rectangleArea(base: number, height: number): number {
  return base * height;
}

export function losangArea(diagMaior: number, diagMenor: number): number {
  return (diagMaior * diagMenor) / 2;
}

export function trapezioArea(baseH: number, baseL: number, height: number): number {
  return ((baseH + baseL) * height / 2);
}

export function circleArea(r: number): number {
  return 3.14 * (r ** 2);
}

