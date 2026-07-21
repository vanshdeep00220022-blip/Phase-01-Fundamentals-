# ⚡ THE BUILD TRACE // JAVASCRIPT

A system log of my engineering progression, core concepts, and architectural rules.

## TRC_055 // VARIABLES & MEMORY LIFECYCLE
> **Status:** Logged | **Topic:** Storage Mechanics

### 1. Keyword Comparison Matrix

| Feature | `var` | `let` | `const` |
| :--- | :--- | :--- | :--- |
| **Scope** | Function Scope | Block Scope | Block Scope |
| **Re-declare** | Yes | No | No |
| **Re-assign** | Yes | Yes | No |
| **Hoisted** | Yes (`undefined`) | Yes (TDZ) | Yes (TDZ) |

### 2. The Mechanics of Hoisting
JavaScript engine reads code in two phases: **Memory Creation** and **Code Execution**.
- `var` is registered and immediately given a value of `undefined`.
- `let` and `const` are registered but **not initialized**. They sit in the **Temporal Dead Zone (TDZ)**. 
- Accessing `let` or `const` before their initialization line instantly throws a `ReferenceError`.

---
_Trace Active // System Stable_
