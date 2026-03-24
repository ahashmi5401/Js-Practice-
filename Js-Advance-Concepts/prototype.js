//Prototype
//object have many property even many of those we didn't create it 
//so , if we didn't create these property where do they come from thats where the concept of 
//prototype comes in every created object get a property  called a prototype 
//which mean when ever you create object it get prototype property automatically


// [[Prototype]] vs. prototype:

// [[Prototype]]
//  (accessible via Object.getPrototypeOf() or the deprecated __proto__ property) is the actual
// link in the prototype chain that every object instance has.

//Prototype
// prototype is a property on constructor functions (or classes) that points to the object 
// that will serve as the [[Prototype]] for all instances created by that constructor.

let obj = {
    name : "Muhammad Ayan Hashmi"
}

console.log(obj.__proto__)

//one example
console.log(obj.hasOwnProperty('name'))//one of these property come from prototype we didn't made it



///EXAMPLE 1
function Person(name) {
  this.name = name;
}

// Add a method to the prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

//both have constructor function adn greet method add in there [[prototype]]
const alice = new Person("Alice");
const bob = new Person("Bob");

alice.greet(); // Output: Hello, my name is Alice
bob.greet();   // Output: Hello, my name is Bob

// Both 'alice' and 'bob' share the same 'greet' method.
