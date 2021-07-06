//1 -
// function compareTrue(num1, num2) {
//   if (num1 === true && num2 === true) {
//     return true;
//   } else if (num1 === true && num2 === false ) {
//     return false;
//   } else {
//     return false;
//   }
// }

// console.log(compareTrue(true, true));


//2 -
// function calcArea(base, height) {
//   return (base * height) / 2
// }

// console.log(calcArea(51, 1));

//3-
// function splitSentence(frase) {
//   return frase.split(" ");
// }

// console.log(splitSentence('foguete'));

//4 -
// function concatName(array) {
//   let names = "";
//   names = array[array.length - 1] + ', ' + array[0];

//   return names;
// }

// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

//5 -
// function footballPoints(wins, ties) {
//   let pointsWins = wins * 3;
//   return pointsWins + ties;
// }

// console.log(footballPoints(1, 2));

//6 -
// function highestCount(numbers) {
//   let highestNumber = 0;
//   let countNumbers = 0;
//   for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] > highestNumber) {
//       highestNumber = numbers[index];
//       countNumbers = 1;
//     } else if (highestNumber === numbers[index]) {
//       countNumbers += 1; 
//     }
//   }
//   return countNumbers;
// }

// console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));

// 7 -
// function catAndMouse(mouse, cat1, cat2) {
//   let dist1 = mouse - cat1;
//   let dist2 = mouse - cat2;

//   if (dist1 < dist2) {
//     return 'cat1';
//   } else if (dist2 < dist1) {
//     return 'cat2';
//   } else {
//     return 'os gatos trombam e o rato foge';
//   }
// }

// console.log(catAndMouse(16, 10, 9));

//8 -
// function fizzBuzz(array) {
//   let newArray = [];
//   for (let index = 0; index < array.length; index += 1) {
//     if (array[index] % 3 === 0 && array[index] % 5 === 0) {
//       newArray.push('fizzBuzz');
//     } else if (array[index] % 3 === 0) {
//       newArray.push('fizz');
//     } else if (array[index] % 5 === 0) {
//       newArray.push('buzz');
//     } else {
//       newArray.push('bug!');
//     }
//   }
//   return newArray;
// }

// console.log(fizzBuzz([2, 15, 7, 9, 45]));

//9 -
// function encode(frase) {
//   let newFrase = frase;
//   newFrase = newFrase.replace(/a/g, '1');
//   newFrase = newFrase.replace(/e/g, '2');
//   newFrase = newFrase.replace(/i/g, '3');
//   newFrase = newFrase.replace(/o/g, '4');
//   newFrase = newFrase.replace(/u/g, '5');
//   return newFrase;
// }

// function decode(frase) {
//   let newFrase = frase;
//   newFrase = newFrase.replace(/1/g, 'a');
//   newFrase = newFrase.replace(/2/g, 'e');
//   newFrase = newFrase.replace(/3/g, 'i');
//   newFrase = newFrase.replace(/4/g, 'o');
//   newFrase = newFrase.replace(/5/g, 'u');
//   return newFrase;
// }

// console.log(encode('hi there!'));
// console.log(decode('h3 th2r2! Al5n4'));

//10 -
function nomesTec(array, name) {
  let newList = [];
  let ordenedArray = array.sort();
  for (let index = 0; index < ordenedArray.length; index += 1) {
    newList.push({
      tech: ordenedArray[index], 
      name
    });
  }
  return newList;
}

console.log(nomesTec(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'));