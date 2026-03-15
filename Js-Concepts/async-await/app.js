// api url 
// fetch("https://fakestoreapi.com/produ")
// .then((res) => {
// return res.json()
// })
// .then((result) => {
// console.log(result)

// })
// .catch((err) => {
// console.log(err)
// })


// 1️⃣3️⃣ Async / Await


async function apiCall () {
try {
    let apiRes = await fetch("https://fakestoreapi.com/products");
    let apiResult = await apiRes.json()
    console.log(apiResult)
} catch (error) {
 console.log(error)   
}
}

apiCall()