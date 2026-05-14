// export default async function Page() {
//   return <div>hello page detail</div>;
// }

// 参数获取
// const { id } = params 同步写法（过时了）

// export default async function Page({ params }: { params: { id: string } }) {
//   console.log("params", params);
//   const { id } = params;
//   console.log("id", id);
//   console.log("--------------------------------");
//   return <div>hello page detail, {id}</div>;
// }

// const { id } = await params  异步写法（推荐的）

// export default async function Page({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;
//   return <div>hello page detail, {id}</div>;
// }

// react19的use函数操作，use客户端组件和服务器组件都可以使用
// "use client";
// import { use, useEffect } from "react";
// export default function Page({
//   params,
//   searchParams,
// }: {
//   params: Promise<{ id: string }>;
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// }) {
//   const { id } = use(params);
//   const search = use(searchParams);
//   useEffect(() => {}, []);
//   return (
//     <div>
//       hello page detail, {id}, {JSON.stringify(search)}
//     </div>
//   );
// }

// export default async function Page({
//   params,
//   searchParams,
// }: {
//   params: Promise<{ id: string }>;
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// }) {
//   const { id } = await params;
//   const search = await searchParams;
//   return (
//     <div>
//       hello page detail, {id}, {JSON.stringify(search)}
//     </div>
//   );
// }

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export async function generateStaticParams() {
  /* return [
    {
      id: '123',
    },
    {
      id: '456'
    }
  ] */
  const todos: Todo[] = await fetch(
    "https://jsonplaceholder.typicode.com/todos",
  ).then((res) => res.json());
  console.log("todos", todos);

  return todos.map((todo: Todo) => ({
    id: todo.id + "",
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log("id", id);

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const todo: Todo = await res.json();
  const num = Math.random();
  return (
    <div>
      hello page detail, {id}, {num}
      <p>{JSON.stringify(todo)}</p>
    </div>
  );
}
