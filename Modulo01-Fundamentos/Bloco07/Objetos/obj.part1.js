// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// Note que o parâmetro da função já está sendo passado na chamada da função.



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

  //console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`)
  
  const customerInfo = (order) => {
      const name = order.order.delivery.deliveryPerson;
      const deliveryFor = order.name;
      const phone = order.phoneNumber;
      const street = order.address.street;
      const number = order.address.number;
      const ap = order.address.apartment;
    console.log(`Olá ${name}, entrega para: ${deliveryFor}, Telefone: ${phone}, R. ${street}, Nº: ${number}, AP: ${ap}`)
  }
 
customerInfo(order);

// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.

const orderModifier = (order) => {
    order['name'] = "Luiz Silva"
    const name =  order.name
    const pizza = Object.keys(order.order.pizza)
    const drinks = order.order.drinks.coke.type
    order.payment['total'] = 'R$50'
    const price = order.payment.total
    console.log(`Olá ${name}, o total do seu pedido de ${pizza} e ${drinks} é ${price},00.`)
}
  
  orderModifier(order);