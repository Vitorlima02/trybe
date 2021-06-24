let custoProduto = 30;
let valorVenda = 50;
let custoProdutototal = 0;
let valorVendaTotal = 0;

if (custoProduto && valorVenda > 0) {
  custoProdutototal = custoProduto * 1000;
  valorVendaTotal = valorVenda * 1000;
  let impostoProduto = valorVendaTotal * (20 / 100); //Valor de 20%
  let lucroTotal = impostoProduto - custoProdutototal + valorVendaTotal;
  console.log(lucroTotal);
} else {
  console.log("Não é possivel calcular valores zerados");
}

