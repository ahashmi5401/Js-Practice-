//ImPure Function

//Can have side effects (modifying external state, I/O, etc.).
//impure functions may produce different results given the same input, or they modify things
//  outside their own scope

let total = 0;
function addToTotal(amount) {
  total += amount; // Modifies external variable
  return total;
}
 //returns 5 the first time, and 10 the second time
 
addToTotal(5)
addToTotal(5)
addToTotal(5)
console.log("Example Of ImPure Function ==>",total);


//Pure Functions

//Deterministic Output: It always produces the same result when given the same input arguments.
//No Side Effects: It does not modify any external state or have any observable impact on the 
// program's state or the external world, such as modifying global variables, performing I/O 
// operations (like console.log() or network requests), or manipulating the DOM.

function add (n1 , n2){
    return n1 + n2
}
console.log("Example Of Pure Function ==>",add(2,2))