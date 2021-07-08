const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?*/
function addTech (event) {
  let tech = document.querySelector('.tech');
  tech.classList.remove('tech');
  event.target.classList.add('.tech');
  input.value = '';
}
firstDiv.addEventListener('click', addTech);
secondDiv.addEventListener('lick', addTech);
thirdDiv.addEventListener('click', addTech);
 /*Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';*/
input.addEventListener('input', function() {
let tech = document.querySelector('.tech');
  tech.innerText = event.target.value;
})

myWebpage.addEventListener('dblclick', function() {
  window.location.replace('https://github.com/Vitorlima02')
})
/* Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;*/

myWebpage.addEventListener('mouseover', function(event) {
  event.target.style.color = 'red';
})

myWebpage.addEventListener('mouseout', function(event) {
  event.target.style.color = 'unset';
})


/*1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/



function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstDiv.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.