// 1. array of pizza toppings
const pizzaToppings = [ "cheese", " vegan cheese", " chicken", " bell peppers"];

// 2. greet customer function while looping over pizza toppings
const greetCustomer = () => {
console.log ("Welcome to Ryan's Pizza Magic! Our toppings include " + pizzaToppings );
};



// 3. getPizzaOrder function with parameters and output list of order items
const getPizzaOrder = ( size, crust, ...pizzaToppings ) => {
console.log ("One " + size + crust + " crust with " + pizzaToppings + " pizza coming up!" )
};



let myPizzaOrder = ["small", "High-Rise", "vegan cheese", "bell peppers"];

for (const items of myPizzaOrder) {
  console.log(items);
};

// 4. preparePizza function with array as parameter. Output with key-value pairs
const preparePizza = (size, crust, ...pizzaToppings) => {
  console.log("Hold on! We are now cooking your " + size + crust + " pizza with " + pizzaToppings+ " now!");
  const myPizza = {
    size: "small",
    crust: "High-Rise",
    pizzaTopping1: "vegan cheese",
    pizzaTopping2: "bell peppers",
  };
  console.log(myPizza);
};



// 5. servePizza function with object as parameter. Pizza is ready message with order. Output pizza object
const myPizza = {
  size: "small",
  crust: " High-Rise",
  pizzaTopping1: "vegan cheese",
  pizzaTopping2: " bell peppers",
};

const servePizza = (size, crust, ...pizzaToppings) => {
  console.log("Order Up! Here's your " + size + crust + " pizza with " + pizzaToppings + "! Enjoy!")
  console.log(myPizza);
};

greetCustomer();
getPizzaOrder("small" , " High-Rise" , " vegan cheese" , " bell peppers");
preparePizza("small", " High-Rise", "vegan cheese", " bell peppers");
servePizza(myPizza.size, myPizza.crust, myPizza.pizzaTopping1, myPizza.pizzaTopping2);

//Sorry! I can't figure out how to complete the Bonus Challenge. Haaaallllpppp
