// function --> functions are reusuable blocks of code designed a perform a particular task.
// It can declare in verious
function greetUser(){
    console.log("Hellow USer");
}
greetUser();

// Parameter & Argument *****IMP*****
function greetUser(user){
    console.log("Hello" + " " + user);
}
// Argument below
let me = "Hiren";
greetUser(me);

///// Anonymous Function --> when there is no name of function //
let aFunc = function(){
    console.log("i am anonyms function");
}
aFunc();

// Array Function --> it provides a shorthand syntax for writing function expressions.
// // ##### Syntax
 const functionName = (parameter) => {
    // code to be executed.
 }

// Arrow Function
// syntax
// const sayHello =() => { };

const sayHello = (val) => {
    console.log ('Hi Hiren')
}
sayHello()

// return()

function Add(a,b){
    console.log(a+b)
    return a+b;
}
Add(2,3);