// SSR等待渲染的问题

// type Todo = {
//   userId: number;
//   id: number;
//   title: string;
//   completed: string;
// };

// export default function Page({ data }: { data: Todo }) {
//   return (
//     <div>
//       <h2>hello page 03</h2>
//       {JSON.stringify(data)}
//     </div>
//   );
// }

// // 服务端获取数据
// export async function getServerSideProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data: Todo = await response.json();
//   await new Promise((resolve) => {
//     setTimeout(resolve, 2000);
//   });
//   return { props: { data } };
// }

// SSR JS体积过大

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: string;
};

export default function Page({ data }: { data: Todo }) {
  function myUpperCase(str: string) {
    return str.toUpperCase();
  }
  return (
    <div>
      <h2>hello page 03</h2>
      {myUpperCase(JSON.stringify(data))}
    </div>
  );
}

// 服务端获取数据
export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data: Todo = await response.json();
  return { props: { data } };
}
