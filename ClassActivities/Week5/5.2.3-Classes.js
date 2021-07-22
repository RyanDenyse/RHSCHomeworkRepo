// refactor your Animal function constructor and methods to use the class keyword
class Animal {
    constructor (name, type, color, weight, age, personality) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.weight = weight;
        this.age = age;
        this.personality = personality;
        this.bio = `This ${this.personality} ${this.color} ${this.type} is ${this.age} years old, weighs ${this.weight} pounds, and is called ${this.name}.`
    }
    greet() {
        return "Hello!";
    }

}
// extend the Animal class with a type of animal // add some unique methods and properties to the class extension
class Cat extends Animal {
    constructor (name, type, color, weight, age, personality, breed) {
    super (name, type, color, weight, age, personality);
    this.breed = breed;
    }
    greet() {
        return "Meeeoooow!"
    }
};

// create an instance of the class extension and call one of its methods
const Garfield = new Cat ("Garfield", "cat", "orange and white", 20, 3, "stubborn", "DSH");
console.log(Garfield);
console.log(Garfield.greet());
console.log(Garfield.bio);