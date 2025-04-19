// // Promise ek JavaScript object hai jo future mein kuch result dene ka vaada karta hai —
// // ya toh resolve (success) hoga ya reject (error).

// function fetchData() {
//     return new Promise(function (resolve, reject) {    // fun reserve key function hai
//         console.log("Fetching data...");

//         setTimeout(() => {
//             let success = true;

//             if (success) {
//                 resolve("Data received successfully");
//             } else {
//                 reject("Failed to fetch data");
//             }
//         }, 2000);
//     });
// }

// fetchData()
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

