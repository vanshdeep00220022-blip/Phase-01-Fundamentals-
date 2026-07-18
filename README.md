📌 1. The Core KeywordsJavaScript uses three keywords to create variables. Think of a variable as a labeled box that stores data.
✨ let – Modern way to declare variables. The value inside the box can change.
🔒 const – Modern way to declare constants. The value cannot change.
⏳ var – Old-school declaration. Avoid using it in modern code.

let totalUsers = 15;    // Can be updated later
const PI = 3.1415;      // Locked forever


🏷️ 2. Naming Rules (Strict)You cannot name your variables just anything. Follow these hard rules to prevent your code from crashing.
🚫 No starting digits – let 1user; causes a syntax error.
❌ No hyphens – let user-name; is illegal.
✅ Allowed characters – Only use letters, digits, $, and _.
🐫 Use camelCase – Join multiple words by capitalizing every word after the first (e.g., currentUserProfile).
⚠️ Case Sensitivity – apple and APPLE are two completely different variables.

🎨 3. Naming Aesthetics & Professional StandardsWriting code that others can read makes you look like a senior developer on GitHub and LinkedIn.
🧑‍💻 Be Descriptive – Use shoppingCart or savedItems. Never use lazy names like data, value, a, or b.
👥 Stay Consistent – If your team calls a visitor a user, stick to currentUser. Do not randomly switch to currentVisitor.
📦 One Box, One Purpose – Create new variables instead of reusing old ones for different data. Modern engines optimize this perfectly.


🔠 4. Lowercase vs. Uppercase Constants
Not all const variables look the same. Separate them by when their value is known.
⭐ UPPERCASE_CONSTANTS (Hard-Coded)Use uppercase with underscores for values known before the code even runs. They act as easy-to-remember aliases.

javascriptconst COLOR_PRIMARY_BLUE = "#00F";
const MAX_LOGIN_ATTEMPTS = 5;

⭐ lowercaseConstants (Runtime)Use standard camelCase for constants calculated during code execution. The value won't change, but you didn't know it beforehand.
javascriptconst pageLoadTime = fetchPerformanceData();

🛑 5. Critical Pitfalls to Avoid
🔁 Double Declaration – You cannot declare the exact same variable twice in the same scope using let. It triggers a SyntaxError.
let currentScore = 10;
let currentScore = 20; // ❌ ERROR!

⚡ Strict Mode Failures – Always use a keyword. Assigning a value without let or const throws an error in modern "use strict" environments.
"use strict";
score = 100; // ❌ ERROR: score is not defined



📝 Practice Tasks (Solved)Task 1: Swapping and Copyingjavascriptlet admin;
let name;

name = 'John';
admin = name; // Copies the value from name into admin

alert(admin); // Outputs: "John"
