// 1. array of pizza toppings
const pizzaToppings = [ "cheese", " vegan cheese", " chicken", " bell peppers"];

// 2. greet customer function while looping over pizza toppings
const greetCustomer = () => {
console.log (`Welcome to Ryan's Pizza Magic! Our toppings include ${pizzaToppings}` );
return `Welcome to Ryan's Pizza Magic! Our toppings include ${pizzaToppings}`;
};
greetCustomer();

// 3. getPizzaOrder function with parameters and output list of order items

let myPizzaOrder = ["small", "High-Rise", [pizzaToppings[1], pizzaToppings[3]]];

const getPizzaOrder = () => {
console.log (`One ${myPizzaOrder[0]} ${myPizzaOrder[1]} crust with ${myPizzaOrder[2][0]} and ${myPizzaOrder[2][1]} pizza coming up!`);
return `One ${myPizzaOrder[0]} ${myPizzaOrder[1]} crust with ${myPizzaOrder[2][0]} and ${myPizzaOrder[2][1]} pizza coming up!`;
};


for (const items of myPizzaOrder) {
  console.log(items);
};
getPizzaOrder();

// 4. preparePizza function with array as parameter. Output with key-value pairs
const preparePizza = (size, crust, ...pizzaToppings) => {
  console.log(`Hold on! We are now cooking your pizza now!`);
  const myPizza = {
    size: myPizzaOrder[0],
    crust: myPizzaOrder[1],
    toppings: myPizzaOrder[2]
  };
  console.log(myPizza);
  return myPizza;
};
preparePizza();



// 5. servePizza function with object as parameter. Pizza is ready message with order. Output pizza object

function servePizza () {
  console.log(`Order Up! Here's your ${myPizzaOrder[0]} ${myPizzaOrder[1]} pizza with ${myPizzaOrder[2][0]} and ${myPizzaOrder[2][1]}! Enjoy!`)
  console.log(myPizzaOrder);
};


servePizza();

