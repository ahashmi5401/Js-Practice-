//Constructor Function => aik jaisi property wale bht obj banane hai tou use karte hain
//have this keyword 
//and return object
//call karte hoye new keyword ka use karen

function CreateStudentObj(name , email , frontEndSkills){
    this.name = name   
    this.email = email
    this.frontEndSkills = skills
}

// The new keyword is an operator used to create an instance of an object 
// from a constructor function or a class.
let student1 = new CreateStudentObj("Muhammad Ayan Hashmi" , "a@gmail.com" , ["HTML" , "CSS" , "JavaScript" , "TypeScript" , "React Js" , "Lenis" , "Firebase"])
console.log("Student 1 is => " ,student1)