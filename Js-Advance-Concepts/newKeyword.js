//new Keyword in js
// The traditional new keyword is used to create instances of objects 
// from constructor functions or classes.

//instance 
// In JavaScript, an instance is a specific realization of an object created from a blueprint,
// which can be a class, a constructor function, or even a prototype object. 
// Each instance holds unique data for its properties while sharing
// the methods defined in its blueprint via the prototype chain.


function Employee(name){
    this.fullName = name
}

let emp1 = new Employee("Muhammad Ayan Hashmi")
console.log(emp1)