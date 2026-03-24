//First Class Function
//A language is said to have first class functions when the function in that language are treated 
//as variable , you can save them , you can pass Them as Argument to other Funtions


// Assigning to variables: You can store a function definition in a variable,
//  just like any other value.

const greet = function() {
  console.log("Hello, Ayan!");
};
greet(); 

// Passing as arguments: Functions can be passed as arguments to other functions, 
// which enables the use of callback functions and higher-order functions like map() or filter().

function execute(fn) {
  fn(); // Calls the passed-in function
}
execute(greet); // Passes the 'greet' function as an argument




// Returning from functions: A function can return another function as its result,
//  which is the foundation for techniques like closures and currying.

function createGreeter(name) {
  return function() {
    console.log("Hello, " + name + "!");
  };
}

//currying
const greeter = createGreeter("Ayan Hashmi")()
