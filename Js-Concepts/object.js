let obj = {
    name : "Muhammad Ayan Hashmi",
    age : 18,
    skill : ["Front End Developer" , "Data Analyst"]
}


//destructuring  and use of rest operator to push all remaing property of obj in other obj
const {name , ...other} = obj;
console.log(name , other)