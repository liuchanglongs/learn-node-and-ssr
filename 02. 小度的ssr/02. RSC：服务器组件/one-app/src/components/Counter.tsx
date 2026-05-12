// RCC

// "use client";

// import { useState } from "react";

// export default function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>点击</button> {count}
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import Todo from "@/components/Todo";

// export default function Counter({ children }: { children: React.ReactNode }) {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>点击</button> {count}
//       {children}
//       {/* <Todo></Todo> */}
//     </div>
//   );
// }

"use client";

import { useState } from "react";

export default function Counter({ todo }: { todo: React.ReactNode }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>点击</button> {count}
      {todo}
    </div>
  );
}
