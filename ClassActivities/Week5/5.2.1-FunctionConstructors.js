// create an object literal // include a method that uses "this"
const animal = {
    name: "Rudy" ,
    age: 3.14, 
    typeOfAnimal: "Marsupial",
    hobbies: ["bake pie", "catching a ball", "sleeping"],
    bio: `${this.name} is ${this.age} old and loves ${this.hobbies}`,
    bakesale(){
        console.log(`Welcome to ${this.name}'s bakesale!`);
    }
};
animal.bakesale();

// // create a function in the global scope that prints "this"
// function logThis() {
//     console.log("this is: ", this);
// }
// console.log(logThis());