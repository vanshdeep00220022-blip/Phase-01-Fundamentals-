# 📊 Visual Logic Flowcharts

### 🧭 Keyword Selection Pipeline

```text
       Should the data change later?
                     │
       ┌─────────────┴─────────────┐
       ▼                           ▼
     [ YES ]                     [ NO ]
       │                           │
       ▼                           ▼
 Use `let` Keyword           Use `const` Keyword
```

### 🧵 String Gluing Order of Operations

```text
Case 1: "5" + 2 + 3
 ┌───────┘   │
 ▼           ▼
"52"   +     3  ──►  "523" (Concatenated)

Case 2: 2 + 3 + "5"
 ┌──────┘   │
 ▼          ▼
 5     +   "5"  ──►  "55"  (Math then Glue)
```
