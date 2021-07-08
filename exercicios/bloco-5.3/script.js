function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

let days = document.querySelector('#days');
for (let index = 0; index < dezDaysList.length; index += 1) {
  let weekDays = document.createElement('li');
  let day = dezDaysList[index];
  

  if (day === 24 | day === 31) {
    weekDays.className = 'day holiday';
    weekDays.innerHTML = day;
    days.appendChild(weekDays);
  } else if (day === 4 | day === 11 | day === 18) {
    weekDays.innerHTML = day;
    weekDays.className = 'day friday';
    days.appendChild(weekDays);
  } else if (day === 25) {
    weekDays.innerHTML = day;
    weekDays.className = 'day friday holiday';
    days.appendChild(weekDays);
  } else {
    weekDays.innerHTML = day;
    weekDays.className = 'day';
    days.appendChild(weekDays);
  }
}

//Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function holiday(nomeDoBotao) {
  let buttonContainer = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.id = '#btn-holiday';
  button.innerHTML = nomeDoBotao;
  buttonContainer.appendChild(button);
}

holiday('Feriados');

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

let button = document.querySelector('#btn-holiday');
button.addEventListener('click', function() {
  let daysHoliday = document.querySelector('.holiday');
  daysHoliday.style.background = 'green';

})
