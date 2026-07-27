# JavaScript Variables and Constants (`let`, `const`, and `var`)

Notes from the "Chai aur JavaScript" series by Hitesh Choudhary.

## Key Concepts

### 1. Variables and Constants Definitions
* **`const`**: Used to declare constants. Once a value is assigned to a `const` variable, it cannot be changed or re-assigned later in the code.
* **`let`**: Used to declare standard variables whose values can be modified or re-assigned during runtime.
* **`var`**: An older way to declare variables in JavaScript. **It is highly recommended not to use it anymore**.

---

## The Story of `var` (Why we don't use it anymore)
In older versions of JavaScript, `var` was the only way to declare variables. However, it introduced significant bugs due to how it handled scope:
* **Scope Issues**: `var` does not respect block scope `{}` or functional scope properly.
* **Variable Collisions**: If a programmer used a variable name inside a loop or conditional block using `var`, it would accidentally overwrite the same variable name defined elsewhere globally or outside that block.
* **The Solution**: Modern JavaScript introduced `let` and `const` to completely fix this block-scoping problem.

> 📝 **Rule of Thumb:** Prefer not to use `var` due to block and functional scoping issues. Always use `const` for values that shouldn't change and `let` for variables that will change.

---

## Code Examples

### Variable Declaration & Modification
```javascript
const accountId = 144553;      // Cannot be changed
let accountEmail = "hitesh@google.com"; // Can be changed
var accountPassword = "12345"; // Avoid using this

// Modifying variables
accountEmail = "hc@hc.com";
accountPassword = "89898";

// accountId = 2; // ❌ NOT ALLOWED! Will throw an Assignment to constant variable error.
```

### Unassigned Variables
If you declare a variable using `let` but do not assign any value to it, JavaScript automatically sets its value as `undefined`.
```javascript
let accountState; 
console.log(accountState); // Output: undefined
```

---

## Useful Tips & Tricks

### 1. Naming Conventions
Variable names should be clean and easily readable. CamelCase (e.g., `accountId`, `accountEmail`) is the most common industry standard syntax in JavaScript.

### 2. Tabular Logging with `console.table()`
Instead of writing multiple `console.log()` lines to print different variables, you can pass them as an array into `console.table()` to display them cleanly inside a structured terminal table.

```javascript
console.table([accountId, accountEmail, accountPassword, accountState]);
```
