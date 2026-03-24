//Prototype Base Inheritance
//prototypal Inheritance

//inheritance 
//a child inherit some property from it paret like surname 

//example 1 
let animal = {
    eat :true
}
let rabbit = {
    jump : true
}

rabbit.__proto__ = animal

//rabbit prototype have animal object so it use all property of animal
console.log(rabbit)
console.log(rabbit.eat)
console.log(rabbit.jump)



//if both object have same property then what will be the answer
let person = {
    canSee : true,
    canWalk : true
}

let blindPerson = {
    canSee : false
}

blindPerson.__proto__ = person
console.log(blindPerson);
console.log(blindPerson.canSee); //answer false bcz it first check in main then go in proto or even
//if proto type is >1 so check all untill find property


let AmputeeBlindPerson = {
    canWalk: false
}

//AmputeeBlindPerson HAVE  blindPerson Obj And  blindPerson obj have person all of two object property
//can be accessile in AmputeeBlindPerson
AmputeeBlindPerson.__proto__ = blindPerson
console.log(AmputeeBlindPerson.canWalk)

//this hasOwnProperty method noy check in proto
console.log(AmputeeBlindPerson.hasOwnProperty('canWalk'))
console.log(AmputeeBlindPerson.hasOwnProperty('canSee')) //false bcz in blindPerson or in proto of this

//RECOMENDED USE INSTEAD hasOwnProperty
//u can also able to use alternative hasOwn but it doesn't check in proto too
console.log(Object.hasOwn(AmputeeBlindPerson , 'canSee'))


//WANT TO CHECK IN PROTOTYPE TOO SO USE

// if you want to check in proto/inherit property  too so use
console.log('canSee' in AmputeeBlindPerson) 

// also see direct property by in 
console.log('canWalk' in AmputeeBlindPerson )

