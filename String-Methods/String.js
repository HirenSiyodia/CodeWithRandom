 // 1. about string --> retuns the length of string
 let myString = "hello world";

 console.log(myString.length) //  o/p: 11

//2. IndexOf() Method --> returns the index within the string of the first occurance of the specified value, -1 if not found.

 let greeting = "Hello Hiren";

 console.log(greeting.indexOf("l")); //  o/p: 2

 let greeting1 = "Hello Hiren";

 console.log(greeting1.indexOf("a")); //  o/p: -1

 //3. slice() method --> extracts a section of a string ad returns it as a new string, without modifying
 //  the original amount. The substring includes the characters up to, but not including, the character indicated by end.

 let greeting2 = "Rakshinda";
 let fname = greeting2.slice(2,7);
 console.log(fname);

 // 4. Replace() --> returns a new string with some or all matches of a pattern replaced by a replacement.
 // the original string is not modified.
 
 let greeting3 = "Hi Hiren";
 let newString =  greeting3.replace("Hi Hiren", "Hi Ishita");
 console.log(newString);

// 5. Split() --> split a string into an array of substrings, and returns the new array.

let greeting4 = "Hiren Siyodia";
let newString1 = greeting4.split('e');
console.log(newString1);

//6. Join(); Joins all elemets of array into string.

let greeting5 = ["Hiren", "Siyodia",];
let newString2 = greeting5.join("-");
console.log(newString2);