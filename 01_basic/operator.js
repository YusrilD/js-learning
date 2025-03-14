// fizzbuzz

// for (let i = 0; i < 100; i++) {
//   i % 15 == 0 && i !== 0
//     ? console.log("fizzbuzz")
//     : i % 3 == 0 && i !== 0
//     ? console.log("fizz")
//     : i % 5 == 0 && i !== 0
//     ? console.log("fizz")
//     : console.log(i);
// }


// let randomNumber = 42; // Assume this is the hidden number
// let guess = 30; // User’s guess

// guess < randomNumber ? console.log("Too low!") : guess > randomNumber ? "Too high!" : "Correct!";




// console.log(1 + true); // true
// console.log(1 + false); // false
// console.log(1 == "1"); // true
// console.log(1 === "1"); // false
// console.log(null == undefined); // true
// console.log(null === undefined); // false
// console.log("5" - 2); 
// console.log("5" + 2);
// console.log(true + true + true); // true
// // note: non empty string equal to true
// console.log(!"false" == !"true"); // false




console.log(!!"0" == !!0); // false
console.log([] == false); // true
console.log([] == ![]); // false
console.log({} + []); // 0
console.log([] + {}); // 0
console.log([1,2,3] + [4,5,6]); // [5,7,9]
console.log(0.1 + 0.2 == 0.3); // 0.1
console.log(typeof NaN); // 
console.log(!!" " == !![]); // false
console.log(null + 1); // 1