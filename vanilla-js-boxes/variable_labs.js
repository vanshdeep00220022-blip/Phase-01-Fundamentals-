/**
 * 📦 JS Containers Blueprint
 * Practical Sandbox for Variables & Data Types
 */

// 👍 Clean Declarations
const MAX_SCORE = 100;
let currentScore = 0;

// ⚡ The Reassignment Test
currentScore = 15; // Works perfectly!
console.log("Current Score Container:", currentScore);

// 🛑 The Coercion Experiments
const experimentA = "5" + 2 + 3;
const experimentB = 2 + 3 + "5";

console.log("Experiment A (String First):", experimentA); // Output: 523
console.log("Experiment B (Math First):", experimentB);   // Output: 55
