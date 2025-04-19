// function greet(name, callback) {   // this is callback
//     console.log("Hello " + name);
//     callback();     // this is callback
// }

// function saybye(){
//     console.log("Good Bye");
// }

// greet("suraj", saybye);     // this is callback



// // -------------- advacnce ---------------------


// function fetchData(callback) {
//     console.log("Fetching data...");

//     setTimeout(() => {
//         console.log("Data received!");
//         callback();
//     },2000);
// }


// function processData(){
    
//     setTimeout(() => {
//         console.log("Processing data...");
//     }, 2000);
// }

// fetchData(processData);