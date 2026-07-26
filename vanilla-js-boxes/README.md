# 📦 JS Containers Blueprint

> An aesthetic, minimal study guide mapping out how JavaScript handles data storage, keywords, and text manipulation.

---

## 🗺️ Core Concepts at a Glance

### 1. The Variables System
* ✨ **`const`** ── Fixed containers. Locked tight. Use for arrays, objects, and static values.
* ⚡ **`let`** ── Fluid containers. Open to changes. Use only when reassignment is mandatory.
* 🛑 **`var`** ── Legacy, leaky containers. Deprecated. Avoid at all costs.

### 2. Identifier Laws
- 🔠 Must start with a letter, `_`, or `$`.
- ❌ Never start with a number (`1stPlace` is illegal).
- 🏷️ Case-sensitive (`box` !== `Box`).

---

## 🎨 Creative Cheat Sheet

```javascript
// ✕ The Coercion Trap
"5" + 2 + 3; // Result: "523" (String behavior takes over)
2 + 3 + "5"; // Result: "55"  (Math runs first, then glues text)
```

🎨 *For detailed visuals, check out [logic_flowcharts.md](./logic_flowcharts.md)*  
🛠️ *To run the sandbox lab, open [variable_labs.js](./variable_labs.js)*
