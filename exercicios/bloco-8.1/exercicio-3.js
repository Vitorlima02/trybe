const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAcertos = (gabarito, estudante, callback) => {
  let totalAcertos = 0;
  for (let index = 0; index < gabarito.length; index += 1) {
    totalAcertos += callback(gabarito[index], estudante[index]);
  }
  return totalAcertos;
}

const totalPoints = (respostaGabarito, respostaEstudante) => {
  if (respostaGabarito === respostaEstudante) {
    return 1;
  } else if (respostaEstudante === 'N.A') {
    return 0;
  }
  return -0.5;
}
console.log(checkAcertos(RIGHT_ANSWERS, STUDENT_ANSWERS, totalPoints));