// TRC_055 // VARIABLES_LOGIC

// 1. Testing 'var' (Function Scoped & Loose)
var user = "Alice";
var user = "Bob"; // No error! Can be re-declared (dangerous).
console.log(user);

// 2. Testing 'let' (Block Scoped & Flexible)
let score = 100;
score = 150; // Allowed! Can be updated.
// let score = 200; // ERROR! Cannot be re-declared in the same scope.
console.log(score);

// 3. Testing 'const' (Block Scoped & Locked)
const API_URL = "https://api.com";
// API_URL = "https://newapi.com"; // ERROR! Cannot be updated.
console.log(API_URL);

// 4. Block Scope Demonstration
if (true) {
    var blockVar = "I escape!";
    let blockLet = "I am trapped!";
}
console.log(blockVar); // Prints successfully.
// console.log(blockLet); // ERROR! blockLet is not defined out here.
