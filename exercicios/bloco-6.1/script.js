const state = document.querySelector('#state');
const statesBrazil = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espirito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];
const dateImput = document.querySelector('#date');

for (let index = 0; index < statesBrazil.length; index += 1) {
  let option = document.createElement('option');
  option.innerHTML = statesBrazil[index];
  state.appendChild(option);
}

let dateValue = input.value.split('/');
let day = splitted[0];
let month = splitted[1];
let year = splitted[2];

function testDate(input, name) {
  if(input.value.length === 0) {
    return {
      message: 'A data não foi preenchida!'
    }
  }
} 

if(day < 0 || day > 31) {
  return {
    message: 'Dia inválido'
  }
}

if(month < 0 || month > 12) {
  return {
    message: 'Mês inválido'
  }
}

if(year < 0) {
  return {
    message: 'Ano inválido'
  }
}