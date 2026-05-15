// import { getUserData } from "@/utils/config";
// export default async function Page() {
//   const res = await fetch(
//     `${process.env.NEXT_BASE_URL}posts?key=${getUserData().key}`,
//   );
//   const data = await res.json();
//   return (
//     <div>
//       hello page 01 --- server
//       <p>{JSON.stringify(data)}</p>
//     </div>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";
// import { getUserData } from "@/utils/config";

// export default function Page() {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     fetch(`${process.env.NEXT_PUBLIC_BASE_URL}posts?key=${getUserData().key}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);
//   return (
//     <div>
//       hello page 01 --- client
//       <p>{JSON.stringify(data)}</p>
//     </div>
//   );
// }

// import Counter from "@/components/Counter";
// import { getUserData } from "@/utils/config";

// export default async function Page() {
//   const res = await fetch(
//     `${process.env.NEXT_BASE_URL}posts?key=${getUserData().key}`,
//   );
//   const data = await res.json();
//   return (
//     <div>
//       <Counter data={data} />
//     </div>
//   );
// }
