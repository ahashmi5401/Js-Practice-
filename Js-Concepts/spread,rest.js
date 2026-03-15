//spread array/object ko kholdeta hai
//rest array/object mai baandh deta hai

//object

let user1= {
    name: "Ayan"
}
//spread
let fullUser1Name = {
    ...user1,
    lastName : "Hashmi"
}
console.log(fullUser1Name)

//rest equal se pehle use hoga 
//other is push in next obj due to use of rest
let user2 = {
    n : 12,
    b:32,
    c:45
}
const {n , ...other} = user2;
console.log(other) //made another obj   for other and push all remaining properties of this


//same for array 