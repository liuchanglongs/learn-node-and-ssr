// export default async function Page() {
//   // server actions
//   async function createAction() {
//     "use server";
//     return "create action";
//   }
//   const res = await createAction();
//   return <div>hello page 05, {res}</div>;
// }

// 内联的serve actions只能在服务器组件中使用，不能在客户端组件中使用
// 服务器组件和客户端组件都支持外部文件的server actions

// "use client";
// import { useEffect, useState } from "react";
// import { createAction } from "./actions";

// export default function Page() {
//   const [res, setRes] = useState("");
//   useEffect(() => {
//     createAction().then((res) => setRes(res));
//   }, []);

//   return <div>hello page 05, {res}</div>;
// }

import Counter from "@/components/Counter";
export default async function Page() {
  // server actions
  async function createAction() {
    "use server";
    return "create action";
  }
  return (
    <div>
      hello page 05
      <Counter createAction={createAction} />
    </div>
  );
}
