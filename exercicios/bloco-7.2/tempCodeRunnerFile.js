const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.order.payment = 50;
  const pizza1 = order.order.pizza.marguerita;
  const pizza2 = order.order.pizza.pepperoni;
  const name = order.name;
  const drink = order.order.drinks.coke.type;
  const payment = order.order.payment.total;

  console.log(`Olá ${name}, o total do seu pedido de ${pizza1}, ${pizza2} e ${drink} é R$ ${payment}.`)

}

orderModifier(order);