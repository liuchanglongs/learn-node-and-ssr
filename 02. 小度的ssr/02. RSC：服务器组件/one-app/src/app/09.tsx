// // 静态渲染
// export default function Page() {
//   const num = Math.random();
//   return (
//     <div>
//       <h2>hello page 099</h2>
//       <div>{num}</div>
//     </div>
//   );
// }

import { connection } from "next/server";

// // 动态渲染
export default function Page() {
  connection();
  const num = Math.random();
  return (
    <div>
      <h2>hello page 09</h2>
      <div>{num}</div>
    </div>
  );
}

// fetch默认是缓存数据的，静态渲染
// type Todo = {
//   userId: number;
//   id: number;
//   title: string;
//   completed: string;
// };

// export default async function Page() {
//   const num = Math.random();
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data: Todo = await response.json();
//   return (
//     <div>
//       <h2>hello page 09</h2>
//       <div>{num}</div>
//       <div>{JSON.stringify(data)}</div>
//     </div>
//   );
// }

//// fetch设置不缓存，动态渲染
// type Todo = {
//   userId: number
//   id: number
//   title: string
//   completed: string
// }

// export default async function Page() {
//   const num = Math.random()
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
//     cache: "no-store"
//   })
//   const data: Todo = await response.json()
//   return (
//     <div>
//       <h2>hello page 09</h2>
//       <div>{ num }</div>
//       <div>{ JSON.stringify(data) }</div>
//     </div>
//   )
// }
