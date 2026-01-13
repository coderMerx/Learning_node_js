// Example showing difference between let and const

// Using let
let counter = 0;
console.log("Initial counter (let):", counter);

counter = 5; // ✅ allowed
console.log("Updated counter (let):", counter);

// Using const
const pi = 3.14159;
console.log("Value of pi (const):", pi);

// pi = 3.15; // ❌ Error: Assignment to constant variable

// But with const objects/arrays:
const fruits = ["apple", "banana"];
console.log("Initial fruits (const array):", fruits);

fruits.push("mango"); // ✅ allowed (modifying contents)
console.log("Updated fruits (const array):", fruits);

// fruits = ["grape", "orange"]; // ❌ Error: Cannot reassign the whole array
