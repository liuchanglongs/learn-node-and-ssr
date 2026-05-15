// export default async function Page() {
//   const res = await fetch("http://localhost:3000/api/posts", {
//     next: { revalidate: 10 },
//   });
//   const data = await res.json();

//   return (
//     <div>
//       hello page 10
//       <p>{JSON.stringify(data)}</p>
//     </div>
//   );
// }

export const revalidate = 10;

export default async function Page() {
  return (
    <div>
      hello page 10
      <p>{Math.random()}</p>
    </div>
  );
}

/* import { revalidatePath } from "next/cache"

export default async function Page() {
  const res = await fetch('http://localhost:4000/posts')
  const data = await res.json()
  async function createAction() {
    'use server'
    revalidatePath('/')
  }
  return (
    <div>
      hello page 10
      <p>{JSON.stringify(data)}</p>
      <form action={createAction}>
        <button type="submit">submit</button>
      </form>
    </div>
  )
} */

// import { revalidateTag } from "next/cache"

// export default async function Page() {
//   const res = await fetch('http://localhost:4000/posts', {
//     next: { tags: ['posts'] }
//   })
//   const data = await res.json()
//   async function createAction() {
//     'use server'
//     revalidateTag('posts')
//   }
//   return (
//     <div>
//       hello page 10
//       <p>{JSON.stringify(data)}</p>
//       <form action={createAction}>
//         <button type="submit">submit</button>
//       </form>
//     </div>
//   )
// }
