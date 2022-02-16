"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circleArea = exports.trapezioArea = exports.losangArea = exports.rectangleArea = exports.squareArea = exports.triangleArea = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `olá ${name} vc está com ${age} agora!`;
}
exports.personAge = personAge;
function add(a, b) {
    return a + b;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangleArea(base, height) {
    return (base * height) / 2;
}
exports.triangleArea = triangleArea;
function squareArea(side) {
    return side ** 2;
}
exports.squareArea = squareArea;
function rectangleArea(base, height) {
    return base * height;
}
exports.rectangleArea = rectangleArea;
function losangArea(diagMaior, diagMenor) {
    return (diagMaior * diagMenor) / 2;
}
exports.losangArea = losangArea;
function trapezioArea(baseH, baseL, height) {
    return ((baseH + baseL) * height / 2);
}
exports.trapezioArea = trapezioArea;
function circleArea(r) {
    return 3.14 * (r ** 2);
}
exports.circleArea = circleArea;
