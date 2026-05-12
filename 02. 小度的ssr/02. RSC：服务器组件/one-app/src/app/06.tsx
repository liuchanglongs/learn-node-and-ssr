// "use client"

// import Todo from "@/components/Todo"

// import Counter from "@/components/Counter";

// export default function Page() {
//   return (
//     <div>
//       <h2>hello page 06</h2>
//       <Counter />
//     </div>
//   );
// }

// 插槽
// import Counter from "@/components/Counter";
// import Todo from "@/components/Todo";

// export default function Page() {
//   return (
//     <div>
//       <h2>hello page 06</h2>
//       <Counter>
//         <Todo />
//       </Counter>
//     </div>
//   );
// }

// 属性
import Counter from "@/components/Counter";
import Todo from "@/components/Todo";

export default function Page() {
  return (
    <div>
      <h2>hello page 06</h2>
      <Counter todo={<Todo />} />
    </div>
  );
}
