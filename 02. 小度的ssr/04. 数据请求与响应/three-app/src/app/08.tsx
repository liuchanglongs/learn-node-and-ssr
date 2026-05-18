// "use client";
// import { useActionState } from "react";
// import { createAction } from "./actions";
// export default function Page() {
//   const [state, formAction, isPending] = useActionState(createAction, {
//     errors: {
//       email: [],
//       password: [],
//     },
//   });
//   const emailState = state?.errors.email ? state?.errors.email[0] : "✔";
//   const passwordState = state?.errors.password
//     ? state?.errors.password[0]
//     : "✔";
//   return (
//     <div>
//       hello page 08
//       <form action={formAction}>
//         <div>
//           <input type="text" className="border" name="email" /> {emailState}
//         </div>
//         <div>
//           <input type="password" className="border" name="password" />{" "}
//           {passwordState}
//         </div>
//         <button type="submit">submit</button>
//       </form>
//     </div>
//   );
// }

"use client";
import { useActionState, startTransition } from "react";
import { createAction } from "./actions";
export default function Page() {
  const [state, formAction, isPending] = useActionState(createAction, {
    errors: {
      email: [],
      password: [],
    },
  });
  const emailState = state?.errors.email ? state?.errors.email[0] : "✔";
  const passwordState = state?.errors.password
    ? state?.errors.password[0]
    : "✔";
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(() => {
      formAction(new FormData(e.currentTarget as HTMLFormElement));
    });
  };
  return (
    <div>
      hello page 08
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" className="border" name="email" /> {emailState}
        </div>
        <div>
          <input type="password" className="border" name="password" />{" "}
          {passwordState}
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
