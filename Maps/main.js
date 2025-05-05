// Higher Order Functions 
// 1. maps
// 2. filter
// 3. Reduce

// 1. **Maps** --> Creates a new array populated with results of calling a provided function on every element in the calling array.
// Syntax -> 'array,.map(callback(currentValue,index, array))' 
let Numbers = [1,2,3,4,5];




// 1st type to execute
let newArray = Numbers.map((element, index, array)=>
    {
        return element *2;
    })
console.log(newArray);

// 2nd type to execute
const newLay = Numbers.map((digit) => { return digit *2});
console.log(newLay);

// For each

// 2. Filter --> Creates a new array with all elements that pass test implemented by the provided function.
// syntax -> 'array.filter(callback(element, index, array))'
let Num = [1,2,3,4,5,6,7,8,9,10];

// 1st and old method

let oddArray = Num.filter((event, index, array)=>
     {
    return event % 2 === 0;
})
console.log(oddArray);


// 2nd method using arrow function with filter
const highOrd = Num.filter((value)=> value%2===0)
console.log(highOrd);

// 3. Reduce Method --> Executes a reducer function on each element of the array, and resulting a single output value.
// syntax --> 'array.reduce(callback(accumulator, CurrentValue, index, array), initial value)'

let Numb = [1,2,3]

// 1st and old method

let sum = Numb.reduce((acc, ele, index, array) =>
{
 return acc + ele;
})
console.log(sum);

// 2nd method using arrow function with reduce

const newReduce = Numb.reduce((Accul, Elem)=> Accul+Elem)
console.log(newReduce)

// Arrays

let data = ["hiren", "magan", "cahagan", "rahul"]
data.splice(0,1, "lalu");
console.log(data);

// Using this function
// const family = {
//     fName: "Hiren Siyodia",
//     version: 999,
//     welcomeMessage: function(){
//         console.log(`hi, ${this.fName}, welcomeeee clubbbbb`);
//     }
//     }
//     family.welcomeMessage()


    // Number using arrow method
const result = (num1, num2) => (num1+num2);

console.log(result(3, 5));

//Object using arrow function "{}" //Important
const data12  = () => ({username:"Hiren Siyodia"})

console.log(data12());



const family = {
    pName: "Nanubhai",
    version: 9589,
    welcomeMessage: function(){
        return(`Hi ${this.pName}, the version of ${this.version}, welcome welcome to the CLubbbbbbb`)
    }
}
console.log(family.welcomeMessage());
