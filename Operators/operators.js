/////////////////////// arithmetic operator ///////////////////////////////////////

let a=3;
let b=2;

// exponentation --> it raises number to the power of another. 2*2 kind of
console.log(a**b)

let result3 = 3;
let result4 = 3;

console.log(result3**result4)

//modules --> it return reminder afer division
console.log(a%b)

//division --> used to divide two values
console.log(a/b)

//multiplication --> used to multiply two values
console.log(a*b)

// subtraction --> used to minus two value

console.log(a-b)

// Addition --> used to add two values

console.log(a+b)

// Increment
let add1=2;
add1++;
console.log(add1);

// Decrement

let add2=2;
add2--;
console.log(add2);

////////////////////////////// comparison operator ///////////////////////////////////////////

// 1. equal to == (Check if both the values are equal) 
console.log(c==d)

// 2. not equal to != (Check if both the values are not equal)
console.log(c!=d)

// 3. strict equal to === (Check if both the values and data type are equal)
let c=10;
let d=10;
console.log(c===d)

// 4. strict not equal to !== (Check if either the values or data type are not equal)
let e=10;
let f=5;
console.log(e!==f)

// 5. greater than > (Check if one value is greater than another value)
let g=15;
let h=10;
console.log(g>h)

// 6. less than < (Check if one value is less than another value)
let i=15;
let j=10;
console.log(i<j)

// 7. greater than equal to >= (Check if one value is greater than or equal to another value)
let k=15;
let l=10;
console.log(k>=l)

// 8. less than equal to <= (Check if one value is less than or equal to another value)
let m=15;
let n=10;
console.log(m<=n)

////////////////////////////////// assignment operator //////////////////////////////////////////

// 1. assignment = (used to assigns a value to a variable) (=)
let name= "hiren";
console.log(name)

// 2. addition assignment = (used for adds a value to variable and assign result) (+=)
let mark = 20;
mark += 2;
console.log(mark)

//3.substraction assignment = (used for substrac a value to variable and assign result) (-=)
let result = 30;
result -= 3;
console.log(result)

//4. multiplication assignment = (used for multiply a value to variable and assign result) (*=)
let result1 = 30;
result1 *= 3;
console.log(result1)

//5. division assignment = (used for divide a value to variable and assign result) (/=)
let result2 = 30;
result2 /= 3;
console.log(result2)

///////////////////////////////// Logical operator ////////////////////////////////////////////////////////
// 1. AND Operator = (&&)
console.log(true && false) // false
console.log(false && true) // false
console.log(true && true) // true
console.log(false && false) // false

// 2. OR Operator = (||)
console.log(true || false) // true
console.log(false || true) // true
console.log(true || true) // true
console.log(false || false) // false

// 3. NOT Operator = (!)
console.log(!true) // false
console.log(!false) // true

let result5 = (a > b) ? "a is greater" : "a is not greater";
console.log(result5); // "a is greater"


// Chai and code => NaN and different value of object

let score3 = "33"; // We passed string and convert into number "Conversion"
let newValue3 = Number(score3); //Using "Number"
console.log(typeof newValue3); // way to convert a string into number
console.log(typeof score3);

let score = "33aa";
let newValue = Number(score);
console.log(newValue);
console.log(typeof score);
// Nan
// string

let score1 = null;
let newValue1 = Number(score1);
console.log(newValue1);
console.log(typeof score1);
// 0
// object

let score2 = undefined;
let newValue2 = Number(score2);
console.log(newValue2);
console.log(typeof score2);
// NaN
// undefined

// Heap memory => primitive type we cannot change and stack memory => Used for objects, arrays, and functions. it can change
let userOne = {
    email:"siyodia@gmail.com",
    id: "hiren@ybl"
}

let userTwo = userOne

userOne.email= "hiren@gmail.com",

console.log(userOne);
console.log(userTwo);

