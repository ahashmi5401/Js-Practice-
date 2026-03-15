//sum of two number
//uf u use this in this it target global yani apne pappa ko target karta hai
//parent object hota tou usse target karta abhi kuch nahi hai tou window ke object target karega 

function sum(n1 , n2){
    console.log(this);
    
    return n1 + n2;
}
let result = sum(2,2)
console.log(result)



//arrow function
//this keyword in arrow function 
const sum2 = (n1 , n2) => {
    console.log(this);
    
    return n1 + n2;

}
let result2 = sum2(2,4)
console.log(result2);
