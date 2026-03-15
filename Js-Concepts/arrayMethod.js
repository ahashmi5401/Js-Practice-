//high order method 
//map , filter , find ... etc
let arr = [12,122,121];

//map return arr
let returnArr = arr.map((n) => n)
console.log(returnArr); //[ 12, 122, 121 ]


//filter check conditon if true than make [true , true , true]

let filterArr = returnArr.filter((n) => n > 12 )
console.log(filterArr); //arr [ 122, 121 ]

//for each loop doesn't return anything 

filterArr.forEach((n) => {
    console.log(n);
}
)



//find

//ANSWER
//true 
//false 
//false
arr.find((n) => {
    console.log(n == 12) //check one one by array element and return true false seperate for each
})