//Instance 
// In JavaScript, an instance is a specific realization of an object created from a blueprint,
// which can be a class, a constructor function, or even a prototype object. Each instance holds
// unique data for its properties while sharing the methods defined in its blueprint via
// the prototype chain. 

//Ways to Create Object Instances

//One Method ===> 

//Object Literals:

// The simplest way to create a single, one-off object. This method cannot easily generate multiple 
// similar instances. 

const person = {
  name: "John",
  age: 30,
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
// 'person' is a single instance created with a literal
console.log("Object Instance create with Object Literal" , person)



//Constructor Function
//The traditional pre-ES6 way to create multiple instances. The new keyword is used to instantiate
//  the function as an object.

function Car(name , model){
    this.name = name
    this.modal = model
}

//car1 is instanc of Car
let car1 = new Car("Toyota" , "2026") 
console.log('car1 is instance of Car is so car1 is ==>' , car1)
console.log(car1 instanceof Car)


//car2 is also instance of Car
let car2 = new Car("Ford" , "2026") 
console.log('car2 is also instance of Car is so car2 is ==>' , car2)
console.log(car2 instanceof Car);

//you make more instance of car with new keyword



//Classes
//  ES6 Classes: Modern JavaScript provides class syntax, which is syntactical sugar over the
//  existing prototype-based inheritance. The new keyword is used with the class name to
//  create an instance.

class Animal{
    constructor(name){
        this.name = name
    }
    run(){
        console.log(this.name , "run")
    }
}

let elephant = new Animal("Elephant")
console.log(elephant)

console.log(elephant instanceof Animal)

//Object.create()
//Object.create(): This method creates a new object and allows you to specify its prototype object
//  directly, offering fine-grained control over inheritance.

const vehicle = {
  wheels: 4,
  engine() {
    console.log('Vroom!');
  }
};

const truck = Object.create(vehicle); // 'truck' inherits from 'vehicle'
truck.make = 'Ford';

console.log(truck) //{make : ford} 
