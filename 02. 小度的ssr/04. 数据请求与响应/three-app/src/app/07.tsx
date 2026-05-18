// "use client";
// import { useActionState } from "react";
// import { createAction } from "./actions";
// export default function Page() {
//   const [state, formAction, isPending] = useActionState(createAction, "init");
//   return (
//     <div>
//       hello page 07
//       <form action={formAction}>
//         <input type="text" className="border" name="message" />
//         <button type="submit">submit</button>
//       </form>
//       <div>state: {state}</div>
//       <div>isPending: {isPending + ""}</div>
//     </div>
//   );
// }

// "use client";
// import { useActionState } from "react";
// import { createAction } from "./actions";
// import { useFormStatus } from "react-dom";
// export default function Page() {
//   const [state, formAction, isPending] = useActionState(createAction, "init");
//   return (
//     <div>
//       hello page 07
//       <form action={formAction}>
//         <input type="text" className="border" name="message" />
//         <Button />
//       </form>
//       <div>state: {state}</div>
//       <div>isPending: {isPending + ""}</div>
//     </div>
//   );
// }

// function Button() {
//   const { pending, data, action, method } = useFormStatus();
//   console.log("pending", pending);
//   console.log("data", data);
//   console.log("action", action);
//   console.log("method", method);
//   return <button type="submit">submit {pending + ""}</button>;
// }

"use client";
import { useActionState, useState, useOptimistic } from "react";
import { createAction } from "./actions";
export default function Page() {
  const [messages, setMessages] = useState<string>(["xxx", "yyy"]);
  const [optimisticMessages, setOptimisticMessages] = useOptimistic(messages);
  const [state, formAction, isPending] = useActionState(submitAction, "init");

  async function submitAction(previousState: string, formData: FormData) {
    const message = formData.get("message");
    setOptimisticMessages((messages) => [...messages, message]);
    const sendMessage = await createAction(message);
    setMessages((messages) => [...messages, sendMessage]);
    return "success";
  }

  return (
    <div>
      hello page 07
      <ul>
        optimisticMessages
        {optimisticMessages.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      form
      <form action={formAction}>
        <input type="text" className="border" name="message" />
        <button type="submit">submit</button>
      </form>
      <div>state: {state}</div>
      <div>isPending: {isPending + ""}</div>
    </div>
  );
}
