//this keyword in JavaScript

//The this keyword in JavaScript refers to a specific object, and the object it points to depends
//entirely on how the function or code is called, not where it is defined.


//THIS IN FUNCTION IT TRGET IT PARENT OBJECT OR IF NOT IN OBJECT IT TARGET WINDOW OBJECT
// 1. In an Object Method
// When a function is a method of an object, this refers to the owner object: 
const person = {
  firstName: "Ayan",
  lastName: "Hashmi",
  fullName: function()  {
    // 'this' refers to the 'person' object
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName()); 



// 2. In a Regular Function (Global Context)
// In a standalone, regular function not in strict mode, this refers to the global object 
// (which is window in a browser):
function normal() {
    console.log(this)
}

normal()

//5. In an Arrow Function 
//Arrow functions do not have their own this. Instead, they inherit the this value from the
//  enclosing lexical scope (the scope where they were defined)
const person2 = {
  firstName: "Muhammad Ayan",
  lastName: "Hashmi",
  fullName: () =>  {
    // 'this' refers to the 'person' object
    return this.firstName + " " + this.lastName;
  }
};

console.log(person2.fullName()); //undefined bcz not have this keyword


//EXAMPLE TWO OF Arrow Function how they inherit
let Obj = {
  name : "Ayan",
  skills : ["FrontEnd Developer" , "Data Analyst" , "Data Scientist"],
  
  regularFunction : function () {
    console.log("In Regular Function" , this.name)

     // Arrow function inherits 'this' from the enclosing 'regularFunction' scope
    const arrowFunc = () => {
      console.log("In Arrow Function" , this.name)
    }
    arrowFunc()
  }
}
Obj.regularFunction()


//4 In a Class Constructor or Method
// In an ES6 class, this refers to the newly created instance of the class:

class Animal{
    constructor(name){
        this.name = name //this refers to  the specific instance (e.g dog)
    }
    speak(){
         console.log(name , "is running");
    }
}

let dog = new Animal("dog")
console.log(dog);
