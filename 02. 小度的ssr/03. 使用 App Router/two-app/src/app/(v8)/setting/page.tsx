"use client";
import { redirect } from "next/navigation";

export default function Page() {
  const handleClick = () => {
    redirect("/login");
  };
  return (
    <div>
      hello setting page
      <div>
        <button onClick={handleClick}>重定向到login</button>
      </div>
    </div>
  );
}
// import { redirect, permanentRedirect } from "next/navigation";

// export default function Page() {
//   // redirect('/login')
//   permanentRedirect("/login");
//   return <div>hello setting page</div>;
// }

// export default function Page() {
//   return (
//     <div>
//       hello setting page
//     </div>
//   )
// }
