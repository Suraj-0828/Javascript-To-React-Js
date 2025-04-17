// Function Method

function myfunction(){
    console.log("Good Morning");
    console.log("Good Afternoon");
    console.log("Good Evening");
    console.log("Good Night");
}

myfunction();
myfunction();


// Function With Return Value
function myfunction1(val1 , val2){
    value = val1 + val2;
    return value;
}

let fun = myfunction1(3, 7);
console.log(fun);

console.log(myfunction1(10, 15));

// One More Example Function With Return Value
function myfunction2(a, b){
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
let arrorfun1 = (a, b) =>{
    console.log(`This is Return Arror Function ${(a + b)}`);
}
console.log(arrorfun1(5, 6));

// Arror Function With Return + Parameter
let arrorfun2 = (c , d) => {
    return (c * d);
}
let newarrorfun2 = arrorfun2(12, 10);

console.log(`This is arror with return + parameter : ${newarrorfun2}`);