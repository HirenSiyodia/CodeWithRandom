//Dot Notation
let myObject = {
    name:"Hiren",
    age:  20,
    city: "Navsari",
    nation: "india"
}

console.log(myObject.name); //Dot Notation

// Bracket Noitation
let myObject1 = {
    name:"Hiren",
    age:  20,
    city: "Navsari",
    nation: "india"
}

console.log(myObject1["name"]); // Bracket Noitation

// Object.keys() --> it returns an array of a given object's own enumerable property **names** (keys).
// syntax => 'Object.keys(obj)'

const Keys = Object.keys(myObject1);
console.log(Keys);

// Object.values(); --> it returns an array of a given object's own enumerable property **values**.
const Values = Object.values(myObject1);
console.log(Values);