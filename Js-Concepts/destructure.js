//Destructure
//array 
//object


//OBJECT DESTRUCTURING
let obj = {
    name : "Muhammad Ayan Hashmi",
    age : 18,
    skill : ["Front End Developer" , "Data Analyst"],
    address : {
        permanent : "XYZ",
        temperary : "abc"
    }
}


//destructuring  and use of rest operator to push all remaing property of obj in other obj
// const {name , ...other} = obj;
// console.log(name , other)

//if obj have another obj as property 
const {address : {permanent , temperary}} = obj
console.log(permanent)


//ARRAY DESTRUCTURING

let arr = [12,43, 31];
//destructuring  and use of rest operator to push all remaing property of array in other array
const [n1 ,  ...otherItem] = arr;

console.log(n1 , otherItem)