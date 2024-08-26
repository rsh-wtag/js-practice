/*
Object-Oriented JavaScript (OOP)
=========================
Object-Oriented Programming (OOP) is a programming paradigm centered around objects rather than actions. 
In JavaScript, OOP is used to create reusable code that models real-world entities.

Let's explore the key concepts of OOP in JavaScript.
*/

/* 
1. Prototypes
----------------
In JavaScript, every object has a hidden [[Prototype]] property. 
Objects can inherit properties and methods from their prototype.

Example:
*/

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    return `${this.name} makes a sound.`;
};

const dog = new Animal("Dog");
console.log(dog.speak()); // "Dog makes a sound."

/*
  Here, the 'speak' method is added to Animal's prototype. 
  Any instance of Animal can access this method via the prototype.
  */

/*
  2. Prototype Chain
  ---------------------
  JavaScript objects form a chain known as the prototype chain. 
  If a property or method is not found on the object itself, JavaScript will search up the prototype chain.
  
  Example:
  */

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function () {
    return `${this.name} barks.`;
};

const myDog = new Dog("Rex", "Labrador");
console.log(myDog.speak()); // "Rex barks."
console.log(myDog.hasOwnProperty("name")); // true
console.log(myDog.hasOwnProperty("speak")); // false (inherited from prototype)

/*
  If 'speak' is not found on the Dog instance, JavaScript checks Dog's prototype, then Animal's prototype, and so on.
  */

/*
  3. Prototype Inheritance
  ---------------------------
  Prototype inheritance allows one object to inherit properties and methods from another object.
  
  Example:
  */

function Cat(name, color) {
    Animal.call(this, name);
    this.color = color;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.speak = function () {
    return `${this.name} meows.`;
};

const myCat = new Cat("Whiskers", "black");
console.log(myCat.speak()); // "Whiskers meows."

/*
  The Cat constructor inherits from Animal, allowing Cat instances to use properties and methods from Animal.
  */

/*
  4. Object-Oriented Programming (OOP)
  ----------------------------------------
  OOP is a way to structure code by modeling it around objects. 
  Objects contain data (attributes) and behavior (methods).
  
  Example:
  */

function Vehicle(type, speed) {
    this.type = type;
    this.speed = speed;
}

Vehicle.prototype.move = function () {
    return `${this.type} moves at ${this.speed} mph.`;
};

const car = new Vehicle("Car", 60);
console.log(car.move()); // "Car moves at 60 mph."

/*
  This example models a vehicle with attributes (type, speed) and behavior (move).
  */

/*
  5. OOP Principles
  --------------------
  The four main OOP principles are Abstraction, Encapsulation, Inheritance, and Polymorphism.
  */

/*
  6. Abstraction
  ----------------
  Abstraction hides complex implementation details and exposes only the essential features.
  
  Example:
  */

function CoffeeMachine(power) {
    this.power = power; // Abstraction: only power is exposed
    let waterAmount = 0; // private property

    this.setWaterAmount = function (amount) {
        if (amount < 0) throw new Error("Negative amount not allowed");
        waterAmount = amount;
    };

    this.getWaterAmount = function () {
        return waterAmount;
    };
}

const machine = new CoffeeMachine(1000);
machine.setWaterAmount(500);
console.log(machine.getWaterAmount()); // 500

/*
  Here, waterAmount is hidden, and only setWaterAmount and getWaterAmount methods are exposed.
  */

/*
  7. Encapsulation
  -----------------
  Encapsulation bundles data and methods that operate on that data within a single unit, restricting access to certain components.
  
  Example:
  */

function Account(balance) {
    let _balance = balance; // Encapsulated data

    this.deposit = function (amount) {
        if (amount > 0) _balance += amount;
    };

    this.withdraw = function (amount) {
        if (amount <= _balance) _balance -= amount;
    };

    this.getBalance = function () {
        return _balance;
    };
}

const myAccount = new Account(100);
myAccount.deposit(50);
console.log(myAccount.getBalance()); // 150

/*
  The _balance variable is encapsulated, accessible only via methods.
  */

/*
  8. Classes
  ------------
  ES6 introduced classes as a syntactical sugar over the existing prototype-based inheritance. 
  They provide a cleaner and more intuitive way to create objects and manage inheritance.
  
  Example:
  */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name}.`;
    }
}

const john = new Person("John", 30);
console.log(john.greet()); // "Hello, my name is John."

/*
  Classes simplify the process of creating objects and managing inheritance.
  */

/*
  9. Inheritance
  ---------------
  Inheritance is the mechanism by which one class (child) inherits properties and methods from another class (parent).
  
  Example:
  */

class Employee extends Person {
    constructor(name, age, position) {
        super(name, age);
        this.position = position;
    }

    work() {
        return `${this.name} is working as a ${this.position}.`;
    }
}

const alice = new Employee("Alice", 28, "Developer");
console.log(alice.greet()); // "Hello, my name is Alice."
console.log(alice.work()); // "Alice is working as a Developer."

/*
  Here, Employee inherits from Person, reusing its properties and methods.
  */

/*
  10. Polymorphism
  ------------------
  Polymorphism allows objects of different classes to be treated as objects of a common superclass. 
  It enables a single method to be used in different ways.
  
  Example:
  */

class Bird {
    fly() {
        return "Flying high!";
    }
}

class Sparrow extends Bird {
    fly() {
        return "Flying at a moderate height!";
    }
}

class Eagle extends Bird {
    fly() {
        return "Flying at a great height!";
    }
}

const birds = [new Bird(), new Sparrow(), new Eagle()];
birds.forEach((bird) => console.log(bird.fly()));

/*
  The fly method is polymorphic. 
  It behaves differently depending on the object invoking it.
  */
