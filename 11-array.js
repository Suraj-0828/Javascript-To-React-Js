// // arrays collections

// let language = ["English", "Hindi", "Marathi"];

// let marks = [80, 70, 85];

// let student = ["Suraj Jha", 24, 90.92, "pass"];


// console.log(language);   // print array

// console.log(language[1]);   // access index


// console.log("Loop is Start");
// // loop ke through
// for(let i=0; i<student.length; i++){
//     console.log(student[i]);
// }
// console.log("Loop is Completed");


// // for of method use
// for(let xxx of language){
//     console.log(xxx);
// }


// // push method for array   -> add from last 
// language = ["English", "Hindi", "Marathi"];

// language.push("History", "Maths", "Science");

// console.log(language);

// // pop method  -> remove from last
// language.pop("Science");

// console.log(language);

// // unshift method   -> add starting
// language.unshift("Programming");

// console.log(language);

// // shift method   -> Delete from Start
// language.shift("Programming");

// console.log(language);

// // Slice method     -> 1 se 4 tak joh bhi rahega sab delete karo
// let fruits = ["apple", "banana", "mango", "grapes", "kiwi"];
// let sliced = fruits.slice(1, 4);

// console.log(sliced);

// //Splice Method
// fruits = ["apple", "banana", "mango", "grapes", "kiwi"];
// let removed = fruits.splice(2, 2);  // mango & grapes delete ho jayenge

// console.log(removed);