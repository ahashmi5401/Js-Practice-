console.log("Call Apply Bind In JavaScript");
console.log('=============================> Call <=============================')
//Immediately invokes the function.
//Takes arguments individually (comma-separated list).
let student1 = {
    name : "Muhmmad Ayan Hashmi",
    greeting : function (){
       return{
           name : this.name
       }
    }
}

let student2 = {
    name : 'Ayan'

}
console.log(student1.greeting())

//use of call 
//u can use method in student two even can't make 
let stu2 = student1.greeting.call(student2)
console.log(stu2);


//Second Example of call
let students = {
    name: "hashmi",
    age : 19,
    skills:['HTML','CSS','JS','Lenis','GSAP']
}

function intro(username){
    return{
        name : this.name,
        age : this.age,
        skills : this.skills,
        github : username
    }
}

let student = intro.call(students , 'ahashmi5401')
console.log(student)



console.log('=============================> Apply <=============================')
//Immediately invokes the function.
//Takes arguments as an array (or array-like object).


//Apply 
//in apply the argument give in form of array [a , b]
let applyStudent ={
    name:'M Ayan Hashmi',
    age:19,
    skills:['HTML','CSS','JS','Lenis','GSAP']
}

function applyIntro(university , username){
    return{
        name : this.name,
        age : this.age,
        skills : this.skills,
        university : university,
        github: username
    }
}

let applyStudent1 = applyIntro.apply(applyStudent , ["SSUET" , 'ahashmi5401'])
console.log(applyStudent1);


console.log('=============================> Bind <=============================')
//Returns a new function that can be invoked later.
//Takes arguments individually, with additional arguments passed when the new function is called.


// bind 
//return , name()=> call
let bindStudent = {
    name : 'Muhammad Ayan',
    qualification : 'underGraduate'
}

function bindIntro(university,username){
    return{
        name:this.name,
        qualification : this.qualification,
        university : university,
        github: username
    }
}

let bindStu1 = bindIntro.bind(bindStudent , "SSUET" , 'ahashmi5401') //does not accept array 
console.log(bindStu1) //need to call


// The new function can be called later
console.log(bindStu1())

