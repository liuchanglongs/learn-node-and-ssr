// export default async function Page() {
//   // const res = await fetch('http://localhost:4000/posts')
//   // const res = await fetch(`${process.env.NEXT_BASE_URL}posts`);
//   const res = await fetch(`${process.env.NEXT_BASE_URL}test?city=bj&auth=1`);
//   // console.log(res);
//   const data = await res.json();
//   // console.log(data);
//   return (
//     <div>
//       hello page 04
//       <p>{JSON.stringify(data)}</p>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}posts?auth=1`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div>
      hello page 04 --- client
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
