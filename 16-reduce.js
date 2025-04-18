// // reduce() array ke har element par kaam karta hai aur unko combine karke ek final value banata hai.
// // Jaise: sum, product, average, object banana, etc.

// // { Kaise Kaam Karta Hai:
// // Start: acc = 0, curr = 10 → 0 + 10 = 10

// // Next: acc = 10, curr = 20 → 10 + 20 = 30

// // Then: 30 + 30 = 60

// // Then: 60 + 40 = 100 }


// // ------------- Start -------------


// let number = [10, 20, 30, 40, 50];

// let totalsum = number.reduce((prev, current) => {
//     return prev + current;
// });


// console.log("The Total Sum : " + totalsum);