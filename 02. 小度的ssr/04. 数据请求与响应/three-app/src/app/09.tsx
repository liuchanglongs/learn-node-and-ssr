export default async function Page() {
  const res = await fetch(`${process.env.NEXT_BASE_URL}posts?`);
  const res2 = await fetch(`${process.env.NEXT_BASE_URL}posts`);
  const res3 = await fetch(`${process.env.NEXT_BASE_URL}posts`);
  const res4 = await fetch(`${process.env.NEXT_BASE_URL}posts`);
  const res5 = await fetch(`${process.env.NEXT_BASE_URL}posts`);
  const res6 = await fetch(`${process.env.NEXT_BASE_URL}posts`);
  const res7 = await fetch(`${process.env.NEXT_BASE_URL}posts`);
  const res8 = await fetch(`${process.env.NEXT_BASE_URL}posts`);
  const res9 = await fetch(`${process.env.NEXT_BASE_URL}posts`);
  const res10 = await fetch(`${process.env.NEXT_BASE_URL}posts`);
  const data = await res.json();
  return (
    <div>
      hello page 09
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

// export default async function Page() {
//   const res = await fetch(`${process.env.NEXT_BASE_URL}posts`, {
//     method: "POST",
//   });
//   const res2 = await fetch(`${process.env.NEXT_BASE_URL}posts`, {
//     method: "POST",
//   });
//   const res3 = await fetch(`${process.env.NEXT_BASE_URL}posts`, {
//     method: "POST",
//   });
//   const data = await res.json();
//   return (
//     <div>
//       hello page 09
//       <p>{JSON.stringify(data)}</p>
//     </div>
//   );
// }

// export default async function Page() {
//   return <div>hello page 09</div>;
// }
