// Function Method


// normal function
function myfunction() {
    console.log("Good Morning");
    console.log("Good Afternoon");
    console.log("Good Evening");
    console.log("Good Night");
}

myfunction();
myfunction();


// Function With Return Value
function myfunction1(val1, val2) {
    value = val1 + val2;
    return value;
}

let fun = myfunction1(3, 7);
console.log(fun);

console.log(myfunction1(10, 15));


// One More Example Function With Return Value
function myfunction2(a, b) {
    return a + b;
}

console.log(`This is second method : ${myfunction2(50, 50)} ...`);



// ------------------ Arror Function -------------------
// Simple
let arrorfun = () => {
    console.log("This is Simple Arror Function");
}
console.log(arrorfun);

// Arror Function With parameter
let arrorfun1 = (a, b) => {
    console.log(`This is Return Arror Function ${(a + b)}`);
}
console.log(arrorfun1(5, 6));

// Arror Function With Return + Parameter
let arrorfun2 = (c, d) => {
    return (c * d);
}
let newarrorfun2 = arrorfun2(12, 10);

console.log(`This is arror with return + parameter : ${newarrorfun2}`);



//------------------- Anonymous function -------------------------
// its work on 2 type ek toh variable ke sath work karta hai or dusra function ke sath Anonymous function ham aakele nahi use kar sakte hai

// simple one - Anonymous function hai or isse hi arrow function bolte hai
// () => {
//   alert("Welcome Suraj");  this is arrow function base also isko hi anonymous function kahte hai
// }


// simple two - setTimeout function yeh hai
// {
//     setTimeout("idhar code add karte hai", 1000);
// }


// simple three
// {
//     setTimeout(() => {
//                 alert("Welcome Suraj");
//             }, 2000);
// }


// simple four - variable ke sath
// {
//     let box = () => {
//         console.log("this is done");
//     }

//     box();
// }


// simple five - setTimeout function ke sath time per output print karega
// {
//     setTimeout(() => {
//         console.log(`2 second ke baad yeh print karega output me`);
//     }, 2000);
// }


// simple six - setTimeout function ke sath thoda deficult code karte hue settime me function add kar ke run kar raha hu
// {
//     let dataa = () =>{
//         console.log("happy holi");
//     };

//     setTimeout(dataa, 3000);
// }

// normal function
// {
//     function test() {
//         console.log("Hello");
//     }

//     setTimeout(test, 2000);

// }


// ---------- important most important point ----------

// arrow function ho

// variable me store function ho

// setTimeout ko farq nahi padta

// print ke liye aise hi karna hai - setTimeout(test, 2000); right way
// - setTimeout(test(), 2000);  wrong way


