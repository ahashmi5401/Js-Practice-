//IIFE
//immediate invoked  function expression

// An Immediately Invoked Function Expression (IIFE, pronounced "iffy") is a JavaScript function that 
// runs as soon as it is defined. It is a powerful pattern primarily used to create a private scope 
// for variables, thus avoiding pollution of the global namespace


//PRIVATE VARIABLE MEAN YOU CAN'T ACCESS OR CHANGE IT Directly

//syntax IFFE
// First IIFE Module
(() => {
    var secret = "Module 1";
    console.log(secret); 
})();

//console.log(secret) //can't access / change  outside because of private a

// Second IIFE Module
(function() {
    var secret = "Module 2";
    console.log(secret); 
})();



//example how to acces private variable outside iffe

let module = (() => {
    let password = "jichuriki"

    return {
        getPassword : () => {
            return password;
        },
        setPassword : (value) => {
            return password = value;
        }
    };
})()
//console.log(myModule.privateVariable); //cant access directly
console.log("access by using get Password method =>" ,module.getPassword()); //answer is private variable value
module.setPassword('Ayan Hashmi')
console.log("access updated password using get password again =>",module.getPassword()); //answer is update private value due to set Password method



//RETURN VALUE DIRECTLY
// Return the Value Directly: An IIFE can compute a value and  return it to a variable 
// declared in the outer scope. This gives you the final result of the internal computation,
//  not ongoing access to the internal variable itself.

const func = (function(){ 
    let a = 10
    let b =20;
    return a + b;
})()

console.log(func)