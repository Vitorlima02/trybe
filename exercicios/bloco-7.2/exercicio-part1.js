const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const street = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const orderPerson = order.name;
  const phonePerson = order.phoneNumber;

  console.log(`Olá, ${deliveryPerson}, entrega para: ${orderPerson}, telefone: ${phonePerson}, R: ${street}, N: ${number}, AP: ${apartment}.`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const pizza = Object.keys(order.order.pizza);
  const name = order.name = 'Luiz Silva';
  const drink = order.order.drinks.coke.type;
  const payment = order.payment.total = 50;

  console.log(`Olá ${name}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${drink} é R$ ${payment}.`);

}

orderModifier(order);