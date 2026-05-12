// 默认：RSC （服务器组件）

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: string;
};

// export default async function Page() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data: Todo = await response.json();
//   console.log("data", data);

//   function myUpperCase(str: string) {
//     return str.toUpperCase();
//   }
//   return (
//     <div>
//       <h2>hello page 04</h2>
//       <div>{myUpperCase(JSON.stringify(data))}</div>
//     </div>
//   );
// }

// type Todo = {
//   userId: number
//   id: number
//   title: string
//   completed: string
// }

export default async function Page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data: Todo = await response.json();
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return (
    <div>
      <h2>hello page 04</h2>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
