//aesa function jo accept karle aik or function or return kare aik or function 
//EXAMPLE
//FOR Each
//Reduce
//Map
//Find
//Filter etc 

function sum(val){  //val is callback 
   console.log(val(3,5)) 
}

sum(sumTwoDigit) //sum is high order

function sumTwoDigit(a , b){
    return a + b
}


//Array High Order Method
 
let arr = [12 , 43 ,32 ,243, 43, 123]

//FILTER
let filterArr = arr.filter((each) => each > 12) //return new arr in which each element value always greater than 12

console.log("filter Array",filterArr)

//FIND
let findArr = arr.find((each) => each == 12)

console.log("find 12 by using find method" , findArr)


//map 
let mapArr = arr.map((each) => {
    let even_odd = each % 2=== 0 ? "even" : "odd"
    console.log(even_odd)
    return even_odd
}) 
//check even or odd

console.log(mapArr)  //return array of [even , odd ...]

//reduce 
let reduceArr = arr.reduce((acc , val) => acc + val) //it return total sum or array element 

console.log(reduceArr)