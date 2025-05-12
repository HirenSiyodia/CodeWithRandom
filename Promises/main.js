// **Promises - Asynchronus operations**
// you receive a confirmation message but must wait for delivery. Which don't block the
//main chain thread durind. ex: imagine ordering pizza online

// Promies handle the result (success or failure ) of these operations asynchronously. They act as a contarct between caller and the executer.

// *** Creating promise**

// Syntax:- let myPromise = new Promise()
// 1. Pending promise:-

let myPromise = new Promise(()=>{
    console.log("First Ptomise");
})
console.log(myPromise); //o/p -> Promise { <pending> }

// 2. Resolve Promise;-
// Resolve ----------> then()

let myPromise1 = new Promise(()=>{
    console.log("resolve promise");
})
myPromise1.then((value)=>{
    console.log(value);
})

// 3. Reject Promise:-
//Reject ----------> catch()

let myPromise3= new Promise((resolve, reject)=>{
    reject();
})

// myPromise3.then(()=>{
//     console.log("resolved");
// }).
myPromise3.catch(()=>{
    console.log("Rejected");
})
// catch((error)=>{
//     console.log('Rejected');
// })

// Example with if else
let myPromise4= new Promise((resolve, reject)=>{

let age= 8;
if (age >= 18){
    resolve("eligible");
}
else {
    reject("uneligible");
}

})

myPromise4
.then((value)=>{
    console.log(value)
})

.catch((error)=>{
    console.log(error)
})

