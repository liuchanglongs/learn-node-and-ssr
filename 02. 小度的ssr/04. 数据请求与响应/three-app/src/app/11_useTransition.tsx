// // app/Caveat2Page.tsx
// "use client";

// import { useState, useMemo, useDeferredValue } from "react";

// function buildHugeList(query: string) {
//   const items = [];
//   for (let i = 0; i < 8000; i++) {
//     items.push(`item-${i}-${query}`);
//   }
//   return items.filter((s) => s.includes(query));
// }

// function HeavyList({ query }: { query: string }) {
//   const deferredQuery = useDeferredValue(query);
//   const list = useMemo(() => buildHugeList(deferredQuery), [deferredQuery]);
//   const isStale = query !== deferredQuery;

//   return (
//     <div
//       className="border p-2 max-h-40 overflow-auto"
//       style={{ opacity: isStale ? 0.5 : 1 }}
//     >
//       <p>子组件收到的 query（已 defer）: {deferredQuery || "(空)"}</p>
//       <p>落后中: {String(isStale)}</p>
//       <ul>
//         {list.slice(0, 30).map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//       <p>…共 {list.length} 条（只展示前 30）</p>
//     </div>
//   );
// }

// export default function Caveat2Page() {
//   const [query, setQuery] = useState("");

//   return (
//     <div className="p-4 space-y-4">
//       <label className="block">
//         搜索（必须同步更新，不能包 startTransition）:
//         <input
//           className="border block w-full mt-1"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//       </label>
//       <HeavyList query={query} />
//     </div>
//   );
// }

// app/Caveat3BadPage.tsx — 你现在的写法
// "use client";

// import { useState, useTransition } from "react";

// export default function Caveat3BadPage() {
//   const [input, setInput] = useState("");
//   const [isPending, startTransition] = useTransition();

//   function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
//     const value = e.target.value;
//     startTransition(async () => {
//       setTimeout(() => {
//         setInput(value); // 已在 startTransition 回调结束之后 → 不是 Transition
//       }, 0);
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//     });
//     // startTransition 的函数到这里已经 return 了
//   }

//   return (
//     <div className="p-4 space-y-2">
//       <input className="border" onChange={handleChange} />
//       <p>input: {input}</p>
//       <p>isPending: {String(isPending)}</p>
//       <p className="text-sm text-gray-600">
//         isPending 几乎总是 false；大更新也挡不住卡顿
//       </p>
//     </div>
//   );
// }

// app/Caveat3GoodPage.tsx
// "use client";

// import { useState, useTransition, useMemo } from "react";

// function buildHugeList(seed: string) {
//   const items = [];
//   for (let i = 0; i < 12000; i++) {
//     items.push(`${seed}-${i}`);
//   }
//   return items;
// }

// export default function Caveat3GoodPage() {
//   const [seed, setSeed] = useState("a");
//   const [isPending, startTransition] = useTransition();
//   const list = useMemo(() => buildHugeList(seed), [seed]);

//   function handleClick(next: string) {
//     startTransition(async () => {
//       setSeed(next); // 同步、且在 startTransition 回调内部 → 是 Transition
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//     });
//   }

//   return (
//     <div className="p-4 space-y-2">
//       <button
//         type="button"
//         className="border px-2"
//         onClick={() => handleClick("a")}
//       >
//         种子 A
//       </button>
//       <button
//         type="button"
//         className="border px-2"
//         onClick={() => handleClick("b")}
//       >
//         种子 B（重列表）
//       </button>
//       <p>isPending: {String(isPending)}</p>
//       <p>当前种子: {seed}</p>
//       <ul className="max-h-32 overflow-auto border">
//         {list.slice(0, 20).map((x) => (
//           <li key={x}>{x}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// app/Caveat4BadPage.tsx
// "use client";

// import { useState, useTransition } from "react";

// async function fetchCount() {
//   await new Promise((r) => setTimeout(r, 1000));
//   return;
// }

// export default function Caveat4BadPage() {
//   const [count, setCount] = useState(0);
//   const [isPending, startTransition] = useTransition();

//   function handleClick() {
//     startTransition(async () => {
//       await fetchCount();
//       setCount((n) => n + 1); // await 之后 → 通常不算 Transition
//       // startTransition(() => {
//       //   setCount((n) => n + 1);
//       // });
//     });
//   }

//   return (
//     <div className="p-4 space-y-2">
//       <button type="button" className="border px-3" onClick={handleClick}>
//         加载
//       </button>
//       <p>count: {count}</p>
//       <p>isPending: {String(isPending)}</p>
//       <p className="text-sm">pending 可能在 await 期间就结束，与 UI 不同步</p>
//     </div>
//   );
// }

// app/Caveat6Page.tsx
// "use client";

// import { useState, useTransition, useMemo } from "react";

// function ExpensiveChart({ range }: { range: "7d" | "30d" }) {
//   const points = useMemo(() => {
//     const data = [];
//     const n = range === "7d" ? 3000 : 20000;
//     for (let i = 0; i < n; i++) {
//       data.push(Math.sin(i) * (range === "30d" ? 2 : 1));
//     }
//     return data;
//   }, [range]);

//   return (
//     <div className="border p-2">
//       <p>
//         图表范围: {range}（{points.length} 点）
//       </p>
//       <p>最后一项: {points[points.length - 1]}</p>
//     </div>
//   );
// }

// export default function Caveat6Page() {
//   const [range, setRange] = useState<"7d" | "30d">("7d");
//   const [note, setNote] = useState("");
//   const [isPending, startTransition] = useTransition();

//   return (
//     <div className="p-4 space-y-4">
//       <label className="block">
//         紧急输入（高优先级，会打断图表 Transition）:
//         <input
//           className="border block w-full mt-1"
//           value={note}
//           onChange={(e) => setNote(e.target.value)}
//         />
//       </label>

//       <button
//         type="button"
//         className="border px-3"
//         onClick={() => {
//           startTransition(async () => {
//             await new Promise((resolve) => setTimeout(resolve, 3000));
//             startTransition(() => {
//               setRange("30d");
//             });
//           });
//         }}
//       >
//         切换到 30 天（重渲染）{isPending ? "…----------->" : "no"}
//       </button>

//       <ExpensiveChart range={range} />
//       <p>备注: {note}</p>
//     </div>
//   );
// }

"use client";

import { useState, useTransition } from "react";

export default function Caveat8Page() {
  const [tab, setTab] = useState("a");
  const [log, setLog] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  function pushLog(msg: string) {
    setLog((prev) => [...prev.slice(-4), `${Date.now()}: ${msg}`]);
  }

  function burstClick() {
    pushLog("连续 startTransition x3");
    startTransition(() => {
      setTab("a");
      pushLog("set a");
    });
    startTransition(() => {
      setTab("b");
      pushLog("set b");
    });
    startTransition(() => {
      setTab("c");
      pushLog("set c");
    });
  }

  return (
    <div className="p-4 space-y-4">
      <p>当前 tab: {tab}</p>
      <p>isPending: {String(isPending)}</p>
      <button type="button" className="border px-3" onClick={burstClick}>
        连点一次（触发 3 个 Transition）
      </button>
      <pre className="border p-2 text-xs">{log.join("\n")}</pre>
      <p className="text-sm text-gray-600">
        最终 tab 多为 c；不要依赖「三个独立 pending 各管各的」
      </p>
    </div>
  );
}
