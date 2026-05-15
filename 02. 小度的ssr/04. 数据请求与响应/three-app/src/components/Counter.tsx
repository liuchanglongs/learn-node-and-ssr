"use client";
import { useState } from "react";

type Post = {
  id: number;
  title: string;
  views: number;
};

export default function Counter({ data }: { data: Post[] }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>计数</button> {count},{" "}
      {JSON.stringify(data)}
    </div>
  );
}

/* "use client"
import { useState } from "react"

export default function Counter({ userKey }: { userKey: string }) {
  const [count, setCount] = useState(0)
    return (
      <div>
        <button onClick={ () => setCount(count + 1) }>计数</button> { count }, { userKey }
      </div>
    )
} */

/* "use client"
import { useState } from "react"

export default function Counter({ createAction }: { createAction: Promise<string> }) {
  const [count, setCount] = useState(0)
  const handleClick = async () => {
    setCount(count + 1)
    const res = await createAction()
    console.log(res)
  }
    return (
      <div>
        <button onClick={handleClick}>计数</button> { count }
      </div>
    )
} */
