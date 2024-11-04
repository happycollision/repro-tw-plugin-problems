# Tailwind issues

## Current issue: prettier-plugin-tailwindcss: over-aggressive whitespace removal

### Repro steps

1. Install all deps. (via whatever, but I used `pnpm`)
2. Run `pnpm run format`

Expected: no change in the files

Actual: some important whitespace is stripped from `index.tsx`

```diff
 export default function Example() {
   const a = "size-12"
   const b = "border border-black"
 
   return (
     <>
-      <div className={a + " p-4 " + b}></div>
+      <div className={a + " p-4" + b}></div>
       <div className={`${a} p-4 ${b}`}></div>
     </>
   )
 }
```
