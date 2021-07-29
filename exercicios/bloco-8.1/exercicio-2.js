const sorteio = (numeroEscolhido, callback) => {
  const number = Math.floor(Math.random() * 6) + 1;
  const ganhou = callback(number, numeroEscolhido);
  if (ganhou === true) {
    return 'Parabéns você ganhou';
  } else {
    return 'Tente novamente';
  }
}

const checkWinner = (numeroSorteado, numeroEscolhido) => {
  return numeroEscolhido === numeroSorteado;
}

console.log(sorteio(1,checkWinner));